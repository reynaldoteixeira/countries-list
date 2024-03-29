import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { fas } from '@fortawesome/free-solid-svg-icons'
import HeaderComponent from './components/HeaderComponent.vue'
import CountriesPage from './views/CountriesPage.vue'
import CountryDetailsPage from './views/CountryDetailsPage.vue'


library.add(fas)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon);
app.component('HeaderComponent', HeaderComponent);
app.component('CountriesPage', CountriesPage);
app.component('CountryDetailsPage', CountryDetailsPage);

app.use(router)

app.mount('#app')
