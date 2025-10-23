import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import { useAuthStore } from '@/stores/auth.store'

const router = createRouter({
  routes: routes,
  history: createWebHistory(),
})

const publicRoutes = ['auth', 'login', 'register']

router.beforeEach(async (to, from, next) => {
  const isPublicRoute = publicRoutes.includes(to.name)

  if (isPublicRoute) {
    next()
    return
  }

  const authStore = useAuthStore()
  const token = authStore.getToken

  if (!token) {
    next({
      name: 'login',
    })
    return
  }
  next()
  return
})

export default router
