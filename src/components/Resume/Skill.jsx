import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const technologies = [
  'Ruby / Ruby on Rails',
  'PHP / Laravel',
  'SQL / PostgreSQL / MySQL',
  'JavaScript / ES6',
  'Vuejs / Nuxt',
  'React / Gatsby',
  'CSS / Sass / Bootstrap / Tailwind CSS',
]

const skills = [
  'Git',
  'GitLab CI / TravisCI',
  'Ansible / Capistrano',
  'REST / API / JWT',
  'Docker / DevOps',
  'Traefik / Nginx',
  'Webpack',
  'Yarn / NPM',
  'macOS / Linux',
]

export default () => (
  <section className="py-8 bg-grey-lightest">
    <div className="container max-w-2xl px-3">
      <h2 className="uppercase text-center text-4xl font-bold mb-8">
        Compétences
      </h2>

      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 sm:px-8">
          <h3 className="mb-4 border-b pb-4">Développement</h3>
          <ul className="list-reset leading-loose">
            {technologies.map((technology, i) => (
              <li key={i} className="flex items-center">
                <FontAwesomeIcon
                  fixedWidth
                  className="text-indigo mr-2"
                  icon={['far', 'check-circle']}
                />{' '}
                {technology}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-1/2 sm:px-8 md:mt-0 mt-8">
          <h3 className="mb-4 border-b pb-4">Connaissances</h3>
          <ul className="list-reset leading-loose">
            {skills.map((skill, i) => (
              <li key={i} className="flex items-center">
                <FontAwesomeIcon
                  fixedWidth
                  className="text-indigo mr-2"
                  icon={['far', 'check-circle']}
                />{' '}
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
)
