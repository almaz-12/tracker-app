<script lang="ts" setup>
import type { Meditation } from '@/interfaces/meditations.interfaces'
import AppButton from './AppButton.vue'
import IconPlay from '@/icons/IconPlay.vue'
import { computed } from 'vue'
import router from '@/router'

const props = defineProps<Meditation>()

const duration = computed(() => {
  return `${props.durationMin} мин.`
})

function goMeditation() {
  router.push({ name: 'meditation' })
}
</script>

<template>
  <div class="meditation-item">
    <div class="meditation-item__title">
      {{ props.title }}
    </div>
    <div class="meditation-item__desc">
      {{ props.description }}
    </div>
    <div class="meditation-item__footer">
      <AppButton @click="goMeditation"> Начать <IconPlay /> </AppButton>
      <div class="meditation-item__duration">{{ duration }}</div>
    </div>
  </div>
</template>

<style>
.meditation-item {
  max-width: 340px;
  padding: 22px 30px;
  border-radius: 20px;
  background: var(--color-background-card);
}
.meditation-item__title {
  margin-bottom: 8px;
  color: var(--color-text-secondary);
  font-weight: 500;
  font-size: 25px;
  line-height: 100%;
}
.meditation-item__desc {
  color: var(--color-text-secondary);
  font-weight: 500;
  font-size: 15px;
}
.meditation-item__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-top: 16px;
}

.meditation-item__duration {
  font-weight: 500;
  font-size: 15px;
  line-height: 100%;
  color: var(--color-background);
}
</style>
