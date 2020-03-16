import Vue from 'vue'
import VueRouter from 'vue-router'
import Application from "../Application";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Application',
        component: Application
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../components/AboutMe/AboutMe')
    },
    {
        path: '/contact',
        name: 'Contact',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../components/Contact/Contact')
    }
]

const router = new VueRouter({
    routes
})

export default router