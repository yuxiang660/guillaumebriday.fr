import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Img from 'gatsby-image'

class Gallery extends Component {
  renderGallery() {
    const { images } = this.props

    if (!images) return

    const gallery = images.map((obj, i) => {
      return (
        <article key={i}>
          <a href={obj.src}>
            <Img fluid={obj.fluid} />
          </a>
        </article>
      )
    })

    return <>{gallery}</>
  }
  render() {
    return (
      <>
        <div id="lightgallery" className="gallery-wrapper">{this.renderGallery()}</div>
      </>
    )
  }
}

Gallery.displayName = 'Gallery'
Gallery.propTypes = {
  images: PropTypes.array,
}

export default Gallery
