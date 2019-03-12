import React from 'react'
import Helmet from 'react-helmet'
import PostHeader from '../components/Post/PostHeader'
import PostPagination from '../components/Post/PostPagination'
import PostComments from '../components/Comment/CommentList'
import { graphql } from 'gatsby'

export default ({
  data: { markdownRemark: post, allCommentsYaml, site },
  pageContext,
}) => (
  <>
    <Helmet title={`${post.frontmatter.title} | ${site.siteMetadata.title}`} />

    <article itemScope="" itemType="http://schema.org/BlogPosting">
      <div className="container pt-16 px-3 mx-auto max-w-lg">
        <PostHeader post={post} allCommentsYaml={allCommentsYaml} />

        <div
          className="post-content"
          itemProp="articleBody"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>

      <div className="container px-3 mx-auto max-w-2xl">
        <PostPagination pageContext={pageContext} />
      </div>

      <div className="bg-grey-lighter">
        <div className="container px-3 mx-auto max-w-lg py-16">
          <PostComments allCommentsYaml={allCommentsYaml} post={post} />
        </div>
      </div>
    </article>
  </>
)

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      fields {
        slug
        datePublished: date(formatString: "YYYY-MM-DD")
        date: date(formatString: "DD MMMM YYYY", locale: "fr")
      }
      frontmatter {
        title
        category
      }
    }

    allCommentsYaml(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          id
          author
          datePublished: date(formatString: "YYYY-MM-DD HH:mm:ss")
          date: date(formatString: "dddd DD MMMM YYYY à HH:mm", locale: "fr")
          content
        }
      }
    }
  }
`
