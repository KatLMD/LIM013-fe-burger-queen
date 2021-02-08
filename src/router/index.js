import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Nueva from '../views/Nueva.vue';
import Pedidos from '../views/Pedidos.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/nueva',
    name: 'Nueva',
    component: Nueva,
  },
  {
    path: '/ordenes',
    name: 'Ordenes',
    // route level code-splitting
    // this generates a separate chunk (Ordenes.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ordenes" */ '../views/Ordenes.vue'),
  },
  {
    path: '/pedidos',
    name: 'Pedidos',
    component: Pedidos,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
