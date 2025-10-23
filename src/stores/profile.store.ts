import api from '@/api'
import { API_ROUTES } from '@/common/constants'
import type { Profile } from '@/interfaces/profile.interfaces'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<Profile | null>(null)
  const isLoading = ref<boolean>(false)
  const errorMessage = ref<string>('')

  function clearError() {
    errorMessage.value = ''
  }

  async function getProfile() {
    try {
      isLoading.value = true
      clearError()

      const response = await api.get<Profile>(API_ROUTES.profile)

      if (response.status !== 200) throw new Error(`Ошибка HTTP: ${response.status}`)

      profile.value = response.data
    } catch (error: any) {
      errorMessage.value =
        error?.response?.data?.message || error.message || 'Ошибка получения данных профиля'
    } finally {
      isLoading.value = false
    }
  }

  return {
    isLoading,
    errorMessage,
    profile,
    getProfile,
  }
})
