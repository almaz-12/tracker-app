<script lang="ts" setup>
import AppHeader from '@/layouts/AppHeader.vue'
import StatisticItem from '@/components/StatisticItem.vue'
</script>

<template>
  <div class="container">
    <AppHeader />
    <div class="statistic-list">
      <StatisticItem type="duration_min" :count="40" text="Минут медитации" />
      <StatisticItem type="duration_min" :count="12" text="Спокойных дней" />
      <StatisticItem type="duration_min" :count="23" text="Расслабленных дней" />
      <StatisticItem type="duration_min" :count="40" text="Фокусированных дней" />
      <StatisticItem type="duration_min" :count="5" text="Тревожных дней" />
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
