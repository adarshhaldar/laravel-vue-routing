import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./components/pages/Home.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('./components/pages/About.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('./components/pages/PageNotFound.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
