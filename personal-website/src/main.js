import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import VueFeather from 'vue-feather';
import App from './App.vue';
import router from './router';

const app = createApp(App);
const pinia = createPinia();

app.component(VueFeather.name, VueFeather);
app.use(router);
app.use(pinia);
app.mount('#app');
