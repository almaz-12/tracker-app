<script lang="ts" setup>
import { MOOD_STATES } from '@/common/constants'
import FeelingItem from './FeelingItem.vue'
import { useStatsStore } from '@/stores/stats.store'

const statsStore = useStatsStore()

async function selectFeeling(value: string) {
  await statsStore.setStats(value, 1)
}
</script>

<template>
  <div class="feeling">
    <div class="feeling__title">Как вы сегодня себя чувствуете?</div>
    <div class="feeling__list">
      <FeelingItem
        :name="state"
        :key="state"
        v-for="state in MOOD_STATES"
        @select="selectFeeling"
      />
    </div>
  </div>
</template>

<style>
.feeling {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
}
.feeling__title {
  font-size: 22px;
  line-height: 100%;
  color: rgba(255, 255, 255, 0.7);
}

.feeling__list {
  display: flex;
  gap: 20px;
}
.feeling-item {
  text-align: center;
  cursor: pointer;
}

.feeling-item:hover .vote__questions-img {
  background: rgba(105, 176, 156, 1);
}
</style>
