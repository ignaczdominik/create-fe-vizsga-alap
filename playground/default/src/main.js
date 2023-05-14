import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from '@/router/index.js'
import App from '@/App.vue'

import 'bootstrap'
import '@/assets/app.scss'

import { defineRule } from 'vee-validate'
import AllRules from '@vee-validate/rules'

Object.keys(AllRules).forEach((rule) => defineRule(rule, AllRules[rule]))

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
