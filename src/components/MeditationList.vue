<script lang="ts" setup>
import { useMeditationStore } from '@/stores/meditation.store'
import MeditationItem from './MeditationItem.vue'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

const store = useMeditationStore()
const router = useRouter()

onMounted(() => store.getAll())
</script>

<template>
  <div v-if="store.isLoading" class="loading">Загрузка...</div>
  <div v-else-if="store.errorMessage" class="error">
    {{ store.errorMessage }}
  </div>
  <div class="meditation-list" v-else-if="store.meditations && store.meditations.length">
    <MeditationItem
      v-for="meditation in store.meditations"
      :key="meditation.id"
      v-bind="meditation"
    />
  </div>
  <div v-else class="not-found">
    Список пуст. Добавьте новую медитацию.
    <button @click="router.push({ name: 'main' })">Вернуться на главную</button>
  </div>
</template>

<style>
.loading,
.error,
.not-found {
  text-align: center;
  padding: 40px 20px;
}
</style>
