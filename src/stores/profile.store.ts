import api from '@/api'
import { API_BASE, API_ROUTES } from '@/common/constants'
import type { Profile } from '@/interfaces/profile.interfaces'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<Profile>()
  const isLoading = ref<boolean>(false)
  const errorMessage = ref<string>('')

  async function getProfile() {
    try {
      isLoading.value = true
      errorMessage.value = ''

      const response = await api.get<Profile>(API_ROUTES.profile)

      if (response.status !== 200) throw new Error(`Ошибка HTTP: ${response.status}`)

      profile.value = response.data
    } catch (error: any) {
      errorMessage.value = error.response.data.error
    } finally {
      isLoading.value = false
    }
  }

  return {
    isLoading,
    errorMessage,
    getProfile,
  }
})
