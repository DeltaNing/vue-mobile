import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Home = () => import('./views/home.vue')

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        }
    ]
})