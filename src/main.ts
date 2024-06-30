import { createApp } from 'vue'
import App from './App.vue'

import './style.css'

import router from './router/router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { fa } from 'vuetify/iconsets/fa'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'
import "@fortawesome/fontawesome-free/css/all.css";
import 'vuetify/dist/vuetify.min.css';

import {createPinia} from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import pinkCustomTheme from '../public/theme/ColorScheme.ts';


const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'pinkCustomTheme',
        themes: {
            pinkCustomTheme
        }
    },
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
            fa
        },
    }
})

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

app.use(router)
app.use(vuetify)

app.mount('#app')
