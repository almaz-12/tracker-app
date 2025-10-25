<script lang="ts" setup>
import { MOOD_LABELS } from '@/common/constants'
import IconFocus from '@/icons/IconFocus.vue'
import IconOk from '@/icons/IconOk.vue'
import IconRelax from '@/icons/IconRelax.vue'
import type { MoodType } from '@/common/constants'

const { name } = defineProps<{ name: MoodType }>()
const emit = defineEmits(['select'])

const components = {
  calm: IconOk,
  relax: IconRelax,
  focus: IconFocus,
  anxiety: IconFocus,
}

function handleSelect(name: string) {
  emit('select', name)
}
</script>

<template>
  <div class="feeling-item" @click="handleSelect(name)">
    <div class="feeling-item__img">
      <component :is="components[name]" />
    </div>
    <div class="feeling-item__text">{{ MOOD_LABELS[name] }}</div>
  </div>
</template>

<style scoped>
.feeling-item__img {
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
