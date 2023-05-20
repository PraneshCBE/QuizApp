import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import SuiVue from 'semantic-ui-vue';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
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

import globalmethods from './globalmethods.js'
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresResetToken)) {
      const resetToken = to.query.resetToken
      if (!resetToken || resetToken.length === 0) {
        next('/404')
      } else {
        // Here, you can make an API call to verify the reset token and handle the response accordingly.
        // For simplicity, we'll just assume the reset token is valid.
        next()
      }
    } else {
      next()
    }
  })
  
  const vuetify = createVuetify({
    components,
    directives,
  })


const app=createApp(App)
    app.use(router)
    app.use(VueSweetalert2);
    app.use(SuiVue);
    app.use(vuetify)
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

app.config.globalProperties.$url='http://34.16.135.44:8090'
app.config.globalProperties.$globalmethods=globalmethods
