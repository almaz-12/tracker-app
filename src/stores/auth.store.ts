import api from '@/api'
import { API_ROUTES, TOKEN_KEY } from '@/common/constants'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Auth } from '@/interfaces/auth.interfaces'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(localStorage.getItem(TOKEN_KEY))
  const isLoading = ref<boolean>(false)
  const errorMessage = ref<string>('')

  function setToken(newToken: string) {
    token.value = newToken
    localStorage.setItem(TOKEN_KEY, newToken)
  }

  const getToken = computed(() => token.value)
  const isAuthenticated = computed(() => !!token.value)

  function clearError() {
    errorMessage.value = ''
  }

  async function login(username: string, password: string): Promise<void> {
    try {
      isLoading.value = true
      clearError()

      const response = await api.post<Auth>(API_ROUTES.auth.login, {
        username,
        password,
      })

      if (response.status !== 200) throw new Error(`Ошибка HTTP: ${response.status}`)

      setToken(response.data.token)
    } catch (error: any) {
      errorMessage.value = error?.response?.data?.message || error.message || 'Ошибка авторизации'
    } finally {
      isLoading.value = false
    }
  }

  async function register(username: string, email: string, password: string): Promise<void> {
    try {
      isLoading.value = true
      clearError()

      const response = await api.post<Auth>(API_ROUTES.auth.register, {
        username,
        password,
        email,
      })

      if (response.status >= 300) throw new Error(`Ошибка HTTP: ${response.status}`)

      setToken(response.data.token)
    } catch (error: any) {
      errorMessage.value = error?.response?.data?.message || error.message || 'Ошибка авторизации'
    } finally {
      isLoading.value = false
    }
  }

  // Функция для инициализации токена при загрузке приложения
  function initToken() {
    const storedToken = localStorage.getItem(TOKEN_KEY)
    if (storedToken) {
      token.value = storedToken
    }
  }

  // Функция выхода
  function logout() {
    token.value = null
    localStorage.removeItem(TOKEN_KEY)
  }

  return {
    isLoading,
    errorMessage,
    login,
    register,
    initToken,
    logout,
    getToken,
    isAuthenticated,
  }
})
