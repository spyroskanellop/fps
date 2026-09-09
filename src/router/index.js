import { createRouter, createWebHistory } from 'vue-router'
import Orders from '../views/Orders.vue'
import Workflow from '../views/Workflow.vue'
import Customers from '../views/Customers.vue'
import Users from '../views/Users.vue'
import Login from '../views/Login.vue'
import Test from '../components/OrdersModal.vue'
import { useAuthStore } from '../stores/auth';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Orders,
      meta: { requiresAuth: true } 
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders,
      meta: { requiresAuth: true } 
    },
    {
      path: '/workflow',
      name: 'workflow',
      component: Workflow,
      meta: { requiresAuth: true } 
    },
    {
      path: '/customers',
      name: 'customers',
      component: Customers,
      meta: { requiresAuth: true }
    },
    {
      path: '/users',
      name: 'users',
      component: Users,
      // meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
      meta: { requiresAuth: false }
    },
  ],
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.matched.some(record => record.meta.requiresAuth) && !authStore.isLoggedIn) {
    next('/login');
  } else {
    next();
  }
});
export default router
