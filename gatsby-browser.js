import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faRss,
  faSearch,
  faUser,
  faComments,
  faCameraRetro,
  faMobileAlt,
  faChevronLeft,
  faChevronRight,
  faArrowLeft,
  faArrowRight,
  faSpinner,
  faBook,
  faGlobeEurope,
  faAtom,
} from '@fortawesome/free-solid-svg-icons'
import {
  faCalendarAlt,
  faClock,
  faKeyboard,
  faCheckCircle,
} from '@fortawesome/free-regular-svg-icons'
import {
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin,
  faAmazon,
  faPaypal,
} from '@fortawesome/free-brands-svg-icons'

import './src/styles/tailwind.css'
import './src/styles/index.css'
import SmoothScroll from 'smooth-scroll'
import 'lightgallery.js'
import 'typeface-roboto'

library.add(
  faRss,
  faSearch,
  faUser,
  faCalendarAlt,
  faKeyboard,
  faCameraRetro,
  faComments,
  faMobileAlt,
  faBook,
  faGlobeEurope,
  faAtom,
  faClock,
  faChevronLeft,
  faChevronRight,
  faCheckCircle,
  faArrowLeft,
  faArrowRight,
  faSpinner,
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin,
  faAmazon,
  faPaypal
)



export const onRouteUpdate = () => {
  new SmoothScroll('a[href*="#"]', {
    duration: 350,
    speedAsDuration: true,
    offset: 30,
    updateURL: false,
  })

  debugger

  // new lightGallery(document.querySelector('#lightgallery'))
}
