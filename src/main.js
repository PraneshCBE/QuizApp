import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { initFlowbite,initAccordions, 
    initCarousels, 
    initCollapses, 
    initDials, 
    initDismisses, 
    initDrawers, 
    initDropdowns, 
    initModals, 
    initPopovers, 
    initTabs, 
    initTooltips } from 'flowbite'
library.add(faUserSecret,faInstagram)

const app=createApp(App)
    app.use(router)
    app.component('font-awesome-icon', FontAwesomeIcon)
   app.mount('#app')
   app.mount(initFlowbite(),initAccordions(),
   initCarousels(),
   initCollapses(),
   initDials(),
   initDismisses(),
   initDrawers(),
   initDropdowns(),
   initModals(),
   initPopovers(),
   initTabs(),
   initTooltips())


