import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Projects from '../pages/Projects.vue';

const routes = [
	{ path: '/', name: 'Home', component: Home },
	{ path: '/projects', name: 'Projects', component: Projects },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
