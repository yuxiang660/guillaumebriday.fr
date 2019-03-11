import React, { Component } from 'react'

export default class ScrollIndicator extends Component {
  state = { scrolled: 0 }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    this.setState({
      scrolled: (window.scrollY / height) * 100,
    })
  }

  render() {
    return (
      <div className="fixed w-full z-50 pin-t pin-l">
        <div
          className="bg-indigo h-1"
          style={{ width: this.state.scrolled + '%' }}
        />
      </div>
    )
  }
}
