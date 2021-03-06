import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueSmoothScroll from 'vue3-smooth-scroll'
import VueWriter from 'vue-writer'

library.add(fas,fab)

var app = createApp(App)
app.component('fa', FontAwesomeIcon)

app.config.productionTip = false;
app.use(VueSmoothScroll)
app.use(VueWriter)
app.mount('#app')
