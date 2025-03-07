import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import useAuthUser from '@/composables/useAuthUser'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('@/views/LoginView/LoginView.vue'),
    },
    {
      path: '/dashboard',

      name: 'dashboard',
      component: () => import('@/views/Dashboard/DashboardView.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

router.beforeEach(async (to) => {
  // Check if the user is logged in

  if (to.meta.requiresAuth) {
    const { isLoggedIn } = useAuthUser()
    const loggedIn = await isLoggedIn()

    if (!loggedIn) {
      // Redirect to login page if not logged in and route requires authentication
      const viewwport_width = window.document.documentElement.clientWidth

      if (viewwport_width > 768) {
        return { name: '/' }
      } else {
        return { name: 'auth' }
      }
    }
  } else {
    // if (to.name == 'auth' || to.name == 'home') return { name: 'dashboard' }
    // Allow navigation to the intended route
    return true // Continue to the target route
  }
})

export default router
