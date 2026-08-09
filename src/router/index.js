import { createRouter, createWebHistory } from 'vue-router'
import Orders from '../views/Orders.vue'
import Workflow from '../views/Workflow.vue'
import Customers from '../views/Customers.vue'
import Users from '../views/Users.vue'
import Login from '../views/Login.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Orders,
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders,
    },
    {
      path: '/workflow',
      name: 'workflow',
      component: Workflow,
    },
    {
      path: '/customers',
      name: 'customers',
      component: Customers,
    },
    {
      path: '/users',
      name: 'users',
      component: Users,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
})

export default router
