import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Layout from '@/views/Layout.vue';
import Users from '@/views/Users.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        redirect: '/users',
      },
      {
        path: '/users',
        component: Users,
      },
      {
        path: '/users/:id/links',
        component: () => import('@/views/Links.vue'),
      },
      {
        path: '/products',
        component: () => import('@/views/products/Products.vue'),
      },
      {
        path: '/products/create',
        component: () => import('@/views/products/ProductForm.vue'),
      },
      {
        path: '/products/:id/edit',
        component: () => import('@/views/products/ProductForm.vue'),
      },
      {
        path: '/orders',
        component: () => import('@/views/Orders.vue'),
      },
      {
        path: '/profile',
        component: () => import('@/views/Profile.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/register',
    component: () => import('@/views/Register.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
