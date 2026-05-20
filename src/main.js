import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import VueFeather from 'vue-feather';
import Vue3Lottie from 'vue3-lottie';
import App from './App.vue';
import router from './router';

const app = createApp(App);
const pinia = createPinia();

app.component(VueFeather.name, VueFeather);
app.use(router);
app.use(pinia);
app.use(Vue3Lottie, { name: "Vue3Lottie" });
app.mount('#app');
