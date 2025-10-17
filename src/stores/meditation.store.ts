import api from '@/api'
import { API_ROUTES } from '@/common/constants'
import type { Meditation } from '@/interfaces/meditations.interfaces'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMeditationStore = defineStore('meditation', () => {
  const meditations = ref<Meditation[]>([])
  const errorMessage = ref<string>('')
  const isLoading = ref<boolean>(false)

  async function getAll() {
    try {
      errorMessage.value = ''
      isLoading.value = true

      const response = await api.get<Meditation[]>(API_ROUTES.meditations)
      if (response.status !== 200) throw new Error(`Ошибка HTTP: ${response.status}`)

      meditations.value = response.data
    } catch (error) {
      errorMessage.value = 'Не удалось загрузить данные'
    } finally {
      isLoading.value = false
    }
  }

  return {
    meditations,
    getAll,
    errorMessage,
    isLoading,
  }
})
