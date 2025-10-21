import api from '@/api'
import { API_BASE, API_ROUTES, TOKEN_KEY } from '@/common/constants'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(null)
  const isLoading = ref<boolean>(false)
  const errorMessage = ref<string>('')

  function setToken(newToken: string) {
    token.value = newToken
    localStorage.setItem(TOKEN_KEY, newToken)
  }

  const getToken = computed(() => token.value)
  const isAuthenticated = computed(() => !!token.value)

  async function login(username: string, password: string): Promise<void> {
    try {
      isLoading.value = true
      errorMessage.value = ''

      const response = await api.post(API_ROUTES.auth.login, {
        username,
        password,
      })

      if (response.status !== 200) throw new Error(`Ошибка HTTP: ${response.status}`)

      setToken(response.data.token)
    } catch (error: any) {
      console.log(error)
      errorMessage.value = error.response.data.error
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
    initToken,
    logout,
    getToken,
    isAuthenticated,
  }
})
