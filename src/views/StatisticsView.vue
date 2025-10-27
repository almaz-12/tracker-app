<script lang="ts" setup>
import AppHeader from '@/layouts/AppHeader.vue'
import StatisticItem from '@/components/StatisticItem.vue'
import { onMounted } from 'vue'
import { useStatsStore } from '@/stores/stats.store'
import { STATS_TEXT } from '@/common/constants'

const statsStore = useStatsStore()

onMounted(async () => {
  await statsStore.getStats()
})
</script>

<template>
  <div class="container">
    <AppHeader />
    <div v-if="statsStore.isLoading" class="loading">Загрузка...</div>
    <div v-else-if="statsStore.errorMessage" class="error">
      {{ statsStore.errorMessage }}
    </div>
    <div v-else-if="statsStore.stats">
      <div class="statistic-list">
        <StatisticItem
          :type="key"
          :count="value"
          :text="STATS_TEXT[key]"
          v-for="(value, key) in statsStore.stats"
          :key="key"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.statistic-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
}
</style>
