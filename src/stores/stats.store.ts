import api from '@/api'
import { API_ROUTES } from '@/common/constants'
import type { Stats } from '@/interfaces/stats.interfaces'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStatsStore = defineStore('stats', () => {
  const stats = ref<Stats | null>(null)
  const isLoading = ref<boolean>(false)
  const errorMessage = ref<string>('')

  function clearError() {
    errorMessage.value = ''
  }

  async function getStats() {
    try {
      isLoading.value = true
      clearError()

      const response = await api.get<Stats>(API_ROUTES.stats)

      if (response.status !== 200) throw new Error(`Ошибка HTTP: ${response.status}`)

      stats.value = response.data
    } catch (error: any) {
      errorMessage.value =
        error?.response?.data?.message || error.message || 'Ошибка получения данных профиля'
    } finally {
      isLoading.value = false
    }
  }

  async function setStat(
    type: 'duration_min' | 'feeling_calm' | 'feeling_relax' | 'feeling_focus' | 'feeling_anxiety',
    value: number,
  ) {
    try {
      isLoading.value = true
      clearError()

      const response = await api.post(API_ROUTES.stats, {
        type,
        value,
      })

      if (response.status !== 200) throw new Error(`Ошибка HTTP: ${response.status}`)

      // stats.value = response.data
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
    stats,
    getStats,
    setStat,
  }
})
