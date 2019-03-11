import React from 'react'
import { formatReadingTime } from '../../utils/helpers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'

export default ({ post, allCommentsYaml }) => {
  const comments = allCommentsYaml ? allCommentsYaml.edges : []

  return (
    <header className="pb-4 mb-8 border-b">
      <Link
        to="/categories"
        itemProp="articleSection"
        className="btn btn--lightest btn--sm"
      >
        {post.frontmatter.category}
      </Link>

      <h1 className="mb-2 text-4xl text-black" itemProp="name">
        {post.frontmatter.title}
      </h1>

      <ul className="list-reset mb-4 text-sm text-indigo">
        <li className="block sm:inline-block mr-3">
          <time
            dateTime={post.fields.datePublished}
            itemProp="datePublished"
            content={post.fields.datePublished}
          >
            <FontAwesomeIcon
              icon={['far', 'calendar-alt']}
              className="mr-1 text-indigo-lighter"
            />{' '}
            Le {post.fields.date}
          </time>
        </li>

        <li className="block sm:inline-block mr-3 md:border-l border-indigo md:pl-3">
          <FontAwesomeIcon icon="user" className="mr-1 text-indigo-lighter" />{' '}
          Par
          <span itemProp="author" itemScope itemType="http://schema.org/Person">
            <span itemProp="name"> Guillaume Briday</span>
          </span>
        </li>

        <li className="block sm:inline-block md:border-l border-indigo md:pl-3">
          <a href="#comments">
            <FontAwesomeIcon
              icon="comments"
              className="mr-1 text-indigo-lighter"
            />{' '}
            {comments.length} commentaire
            {comments.length > 1 ? 's' : ''}
          </a>
        </li>

        <li className="block sm:inline-block mr-3 md:pl-3">
          <FontAwesomeIcon
            icon={['far', 'clock']}
            className="mr-1 text-indigo-lighter"
          />{' '}
          {formatReadingTime(post.timeToRead)}
        </li>
      </ul>
    </header>
  )
}
