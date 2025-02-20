import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

export default ({ data: { site, allTalksYaml } }) => (
  <>
    <Helmet title={`Talks | ${site.siteMetadata.title}`} />

    <div className="container py-16 px-3 mx-auto max-w-3xl">
      <h1>Talks</h1>

      <p className="font-light text-gray-700 text-sm mb-12">
        Il arrive que je fasse des talks de temps à autre. Tu trouveras ici la
        liste complète avec les vidéos et les slides.
      </p>

      <ul className="list-reset mb-8">
        {allTalksYaml.edges.map(({ node: talk }, i) => (
          <li className="mb-8" key={i}>
            <h2 className="font-semibold mb-0 mt-2 leading-tight">
              {talk.title}
            </h2>

            <div className="text-gray-700 text-sm">
              Le{' '}
              <time className="font-light" dateTime={talk.datePublished}>
                {talk.date}
              </time>
            </div>

            <div>
              <p dangerouslySetInnerHTML={{ __html: talk.description }} />

              <p className="flex flex-col md:flex-row">
                {talk.slides_url && (
                  <a href={talk.slides_url} className="mr-4 mb-4">
                    Voir les slides →
                  </a>
                )}

                {talk.video_url && (
                  <a href={talk.video_url} className="mr-4 mb-4">
                    Voir la vidéo →
                  </a>
                )}

                {talk.meetup_url && (
                  <a href={talk.meetup_url}>Voir le Meetup →</a>
                )}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </>
)

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }

    allTalksYaml(sort: { order: DESC, fields: [date] }) {
      edges {
        node {
          title
          description
          datePublished: date(formatString: "YYYY-MM-DD HH:mm:ss")
          date: date(formatString: "DD MMMM YYYY", locale: "fr")
          meetup_url
          slides_url
          video_url
        }
      }
    }
  }
`
