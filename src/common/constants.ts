export const BASE_URL = 'http://localhost:5000'
export const API_ENDPOINT = '/api'
export const API_BASE = `${BASE_URL}${API_ENDPOINT}`

export const API_ROUTES = {
  meditations: '/meditations',
  profile: '/profile',
  auth: {
    login: '/auth/login',
    register: '/auth/register',
  },
}

export const TOKEN_KEY = 'token'

export const MOOD_STATES = ['good', 'relax', 'focus', 'anxiously'] as const

export type MoodType = (typeof MOOD_STATES)[number]

export const MOOD_LABELS = {
  good: 'Спокойно',
  relax: 'Расслабленно',
  focus: 'Фокусировано',
  anxiously: 'Тревожно',
}

export const LOGO = {
  small: 48,
  big: 202,
}
