import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import * as faSolid from '@fortawesome/free-solid-svg-icons'
import * as brands from '@fortawesome/free-brands-svg-icons'
import * as regular from '@fortawesome/free-regular-svg-icons'

library.add(faSolid.faBarsStaggered)
library.add(faSolid.faUser)
library.add(faSolid.faRocket)
library.add(faSolid.faGraduationCap)
library.add(faSolid.faStar)
library.add(faSolid.faStarHalf)
library.add(faSolid.faStarHalfAlt)

library.add(regular.faStar)

library.add(brands.faGithub)
library.add(brands.faLinkedin)

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
