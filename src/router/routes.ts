export const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/MeditationListView.vue'),
  },
  {
    path: '/statistics',
    name: 'statistics',
    component: () => import('@/views/MeditationStatisticsView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/NotFound.vue'),
    name: 'error-404',
  },
]
