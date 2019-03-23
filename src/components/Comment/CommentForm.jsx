import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

// As per the HTML5 Specification
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export default class CommentForm extends Component {
  state = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    form: {
      slug: this.props.slug,
      name: '',
      email: '',
      content: '',
    },
  }

  isDisabled = () => {
    return (
      this.state.isLoading ||
      this.state.form.name === '' ||
      this.state.form.email === '' ||
      !emailRegExp.test(this.state.form.email) ||
      this.state.form.content === ''
    )
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    if (this.isDisabled()) {
      return false
    }

    this.setState({ isLoading: true })

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'comment',
        ...this.state.form,
      }),
    })
      .then(() => {
        this.setState({
          isLoading: false,
          isSuccess: true,
        })
      })
      .catch(() => {
        this.setState({
          isLoading: false,
          isError: true,
        })
      })
  }

  render() {
    const { slug, name, email, content } = this.state.form
    let submitIconProps = { icon: 'chevron-right' }

    if (this.state.isLoading) {
      submitIconProps = { icon: 'spinner', spin: true }
    }

    return (
      <>
        {this.state.isError && (
          <div
            className="bg-red-lightest border border-red-light text-red-dark px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Whoops ! </strong>
            <span className="block sm:inline">
              Quelque chose s'est mal passé, merci de réessayer plus tard.
            </span>
          </div>
        )}

        {this.state.isSuccess ? (
          <div
            className="bg-green-lightest border border-green-light text-green-dark px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Félicitation ! </strong>
            <span className="block sm:inline">
              Votre commentaire a été envoyé avec succès. Il est désormais en
              attente de modération.
            </span>
          </div>
        ) : (
          <form
            onSubmit={this.handleSubmit}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            name="comment"
            method="post"
          >
            <input type="hidden" name="form-name" value="comment" />
            <input type="hidden" name="slug" value={slug} required />

            <p className="text-sm text-grey-darker dark-mode:text-grey">
              Votre adresse de messagerie ne sera pas publiée.
              <br />
              Les champs obligatoires sont indiqués avec{' '}
              <span className="text-red">*</span>.
            </p>

            <div className="my-4 inline-block w-full md:w-1/2 md:pr-2">
              <label htmlFor="name" className="dark-mode:text-white">
                Nom <span className="text-red-light">*</span>
              </label>
              <input
                value={name}
                onChange={this.handleChange}
                placeholder="Votre nom"
                className="text-input mt-1"
                name="name"
                id="name"
                type="text"
                required
              />
            </div>

            <div className="my-4 inline-block w-full md:w-1/2 md:pl-2">
              <label htmlFor="email" className="dark-mode:text-white">
                Email <span className="text-red-light">*</span>
              </label>
              <input
                value={email}
                onChange={this.handleChange}
                placeholder="Votre email"
                className="text-input mt-1"
                name="email"
                id="email"
                type="email"
                required
              />
            </div>

            <div className="my-4">
              <label htmlFor="content" className="dark-mode:text-white">
                Commentaire <span className="text-red-light">*</span>
              </label>
              <textarea
                value={content}
                onChange={this.handleChange}
                placeholder="Votre commentaire"
                className="text-input mt-1"
                name="content"
                id="content"
                rows="8"
                required
              />
              <em className="text-sm text-grey-darker">
                Les commentaires sont formatés en{' '}
                <a
                  href="https://www.markdownguide.org/cheat-sheet"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  markdown
                </a>
                .
              </em>
            </div>

            <div className="flex justify-end">
              <button
                disabled={this.isDisabled()}
                className="btn btn--link py-3 px-4"
              >
                Envoyer{' '}
                <FontAwesomeIcon className="ml-1" {...submitIconProps} />
              </button>
            </div>
          </form>
        )}
      </>
    )
  }
}
