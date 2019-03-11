import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function({ pageContext: { currentPage, numPages } }) {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 <= 1 ? `/articles` : `/articles/page/${currentPage - 1}`
  const nextPage =
    currentPage + 1 <= numPages
      ? `/articles/page/${currentPage + 1}`
      : `/articles/page/${currentPage}`

  if (numPages === 1) {
    return false
  }

  let pages = []
  Array.from({ length: numPages }).forEach((_, i) => {
    const iteration = i + 1

    if (iteration === 1) {
      pages.push({
        iteration: iteration,
        url: `/articles`,
      })
    } else {
      pages.push({
        iteration: iteration,
        url: `/articles/page/${iteration}`,
      })
    }
  })

  let prevTag = (
    <Link
      className="mx-4"
      to={prevPage}
      rel="prev"
      aria-label="Page précédente"
    >
      <FontAwesomeIcon
        icon="arrow-left"
        className="text-grey-darker hover:text-indigo"
      />
    </Link>
  )

  if (isFirst) {
    prevTag = (
      <span className="mx-4">
        <FontAwesomeIcon icon="arrow-left" className="text-grey-darker" />
      </span>
    )
  }

  let nextTag = (
    <Link
      className="mx-4"
      to={nextPage}
      rel="prenextv"
      aria-label="Page suivante"
    >
      <FontAwesomeIcon
        icon="arrow-right"
        className="text-grey-darker hover:text-indigo"
      />
    </Link>
  )

  if (isLast) {
    nextTag = (
      <span className="mx-4">
        <FontAwesomeIcon icon="arrow-right" className="text-grey-darker" />
      </span>
    )
  }

  return (
    <div className="flex justify-center items-baseline">
      {prevTag}

      <div className="mx-4 flex">
        {pages.map(page => {
          const activeClassName = page => {
            let classes =
              'mx-1 rounded-full h-10 w-10 flex items-center justify-center'

            let activeClasses =
              page.iteration === currentPage
                ? 'bg-indigo-lightest text-indigo font-semibold'
                : 'text-grey-darker hover:bg-indigo-lightest hover:no-underline'

            return { className: [classes, activeClasses].join(' ') }
          }

          const className = () => activeClassName(page)
          return (
            <Link to={page.url} key={page.iteration} getProps={className}>
              {page.iteration}
            </Link>
          )
        })}
      </div>

      {nextTag}
    </div>
  )
}
