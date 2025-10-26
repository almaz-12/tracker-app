export const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/MainView.vue'),
  },
  {
    path: '/meditation',
    name: 'meditation',
    component: () => import('@/views/MeditationView.vue'),
  },
  {
    path: '/statistics',
    name: 'statistics',
    component: () => import('@/views/StatisticsView.vue'),
  },
  {
    path: '/auth',
    component: () => import('@/views/AuthView.vue'),
    children: [
      {
        path: '',
        name: 'auth',
        component: () => import('@/views/AuthIndexView.vue'),
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/LoginView.vue'),
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('@/views/RegisterView.vue'),
      },
    ],
  },

  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/NotFound.vue'),
    name: 'error-404',
  },
]
