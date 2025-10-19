<script lang="ts" setup>
import { MOOD_LABELS } from '@/common/constants'
import IconFocus from '@/icons/IconFocus.vue'
import IconOk from '@/icons/IconOk.vue'
import IconRelax from '@/icons/IconRelax.vue'
import type { MoodType } from '@/common/constants'

const { name } = defineProps<{ name: MoodType }>()

const components = {
  good: IconOk,
  relax: IconRelax,
  focus: IconFocus,
  anxiously: IconFocus,
}
</script>

<template>
  <div class="vote__questions-img">
    <component :is="components[name]" />
  </div>
  <div class="vote__questions-text">{{ MOOD_LABELS[name] }}</div>
</template>

<style scoped>
.vote__questions-img {
  width: 62px;
  height: 65px;
  margin: auto;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease-in-out;
}
</style>
