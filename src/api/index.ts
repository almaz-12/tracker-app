import { API_BASE } from '@/common/constants'
import { useAuthStore } from '@/stores/auth.store'
import axios from 'axios'

const api = axios.create({
  baseURL: API_BASE,
})

api.interceptors.request.use((config) => {
  const authStore = useAuthStore()
  const token = authStore.getToken

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export default api
