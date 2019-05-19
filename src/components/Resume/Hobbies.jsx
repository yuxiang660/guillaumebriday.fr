import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => (
  <section className="pt-8 pb-16 bg-gray-200">
    <div className="container max-w-3xl px-3">
      <h2 className="uppercase text-center text-4xl mb-8">
        Mes centres d'intérêts
      </h2>

      <div className="flex flex-wrap justify-around text-indigo-500">
        <div className="w-1/2 md:w-1/3 text-center mb-6">
          <div className="bg-indigo-100 mb-4 inline-block p-8 rounded-full">
            <FontAwesomeIcon
              fixedWidth
              className="hobby-icon fa-3x"
              icon={['far', 'keyboard']}
            />
          </div>

          <p className="text-sm font-bold m-0">Développement</p>
        </div>

        <div className="w-1/2 md:w-1/3 text-center mb-6">
          <div className="bg-indigo-100 mb-4 inline-block p-8 rounded-full">
            <FontAwesomeIcon
              className="hobby-icon fa-3x"
              icon={['fas', 'camera-retro']}
            />
          </div>

          <p className="text-sm font-bold m-0">Photographie</p>
        </div>

        <div className="w-1/2 md:w-1/3 text-center mb-6">
          <div className="bg-indigo-100 mb-4 inline-block p-8 rounded-full">
            <FontAwesomeIcon
              fixedWidth
              className="hobby-icon fa-3x"
              icon={['fas', 'mobile-alt']}
            />
          </div>

          <p className="text-sm font-bold m-0">Technologie</p>
        </div>

        <div className="w-1/2 md:w-1/3 text-center mb-6">
          <div className="bg-indigo-100 mb-4 inline-block p-8 rounded-full">
            <FontAwesomeIcon
              fixedWidth
              className="hobby-icon fa-3x"
              icon={['fas', 'book']}
            />
          </div>

          <p className="text-sm font-bold m-0">Culture</p>
        </div>

        <div className="w-1/2 md:w-1/3 text-center mb-6">
          <div className="bg-indigo-100 mb-4 inline-block p-8 rounded-full">
            <FontAwesomeIcon
              className="hobby-icon fa-3x"
              icon={['fas', 'globe-europe']}
            />
          </div>

          <p className="text-sm font-bold m-0">Voyages</p>
        </div>

        <div className="w-1/2 md:w-1/3 text-center mb-6">
          <div className="bg-indigo-100 mb-4 inline-block p-8 rounded-full">
            <FontAwesomeIcon
              fixedWidth
              className="hobby-icon fa-3x"
              icon={['fas', 'atom']}
            />
          </div>

          <p className="text-sm font-bold m-0">Science</p>
        </div>
      </div>
    </div>
  </section>
)
