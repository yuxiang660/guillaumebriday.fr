import React from 'react'
import Img from 'gatsby-image'

export default ({ file }) => (
  <section className="container pt-16 pb-8 px-3 mx-auto max-w-lg">
    <div className="flex justify-center">
      <div className="flex flex-col">
        <Img
          fluid={file.childImageSharp.fluid}
          className="rounded-full w-32 mx-auto"
          alt="Photo de profil"
        />

        <h1 className="mr-4 text-3xl text-grey-darker dark-mode:text-white font-normal">
          Guillaume{' '}
          <span className="font-extrabold text-black dark-mode:text-white">
            BRIDAY
          </span>
        </h1>
      </div>
    </div>

    <div className="post-content text-grey-darker">
      <p>
        Je suis développeur Web pour faire de{' '}
        <strong>ma passion mon travail</strong>. J'ai pu acquérir de
        l'expérience dans les langages PHP et Ruby, entre autres, au cours de
        mes dernières années en entreprise. J'aime travailler avec Git, faire de
        la <strong>qualité logiciel</strong> et des tests fonctionnels. Tu
        pourra retrouver plus d'information sur mon{' '}
        <a href="/assets/CV-Guillaume-Briday.pdf">CV</a>.
      </p>

      <p>
        <strong>Apprendre et découvrir</strong> les technologies de demain
        occupe mon temps libre afin <strong>d'améliorer mes projets</strong>{' '}
        tant professionnels que personnels.
      </p>
    </div>
  </section>
)
