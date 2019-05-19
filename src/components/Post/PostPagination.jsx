import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default ({ pageContext: { previous, next } }) => (
  <div className="my-6 py-6 flex flex-wrap border-t border-indigo-500">
    <div className="w-full sm:pr-4 sm:w-1/2">
      {previous && (
        <>
          <div className="mb-4">
            <Link
              to={previous.fields.slug}
              rel="prev"
              className="btn btn--lightest btn--sm"
            >
              <FontAwesomeIcon icon="chevron-left" className="mr-1" /> Article
              précédent
            </Link>
          </div>

          <Link
            to={previous.fields.slug}
            rel="prev"
            className="font-semibold text-2xl text-gray-900 dark-mode:text-white leading-tight"
          >
            {previous.frontmatter.title}
          </Link>
        </>
      )}
    </div>

    <div className="w-full sm:pl-4 mt-3 sm:w-1/2 sm:mt-0 text-right">
      {next && (
        <>
          <div className="mb-4">
            <Link
              to={next.fields.slug}
              rel="next"
              className="btn btn btn--lightest btn--sm"
            >
              Article suivant{' '}
              <FontAwesomeIcon icon="chevron-right" className="ml-1" />
            </Link>
          </div>

          <Link
            to={next.fields.slug}
            rel="next"
            className="font-semibold text-2xl text-gray-900 dark-mode:text-white leading-tight"
          >
            {next.frontmatter.title}
          </Link>
        </>
      )}
    </div>
  </div>
)
