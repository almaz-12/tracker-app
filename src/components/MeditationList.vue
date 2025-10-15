<script lang="ts" setup>
import { UseMeditationStore } from '@/stores/meditation.store'
import MeditationItem from './MeditationItem.vue'

const store = UseMeditationStore()
</script>

<template>
  <div class="meditation-list">
    <MeditationItem
      v-if="store.meditations"
      v-for="meditation in store.meditations"
      :key="meditation.ID"
      v-bind="meditation"
    />
  </div>
</template>

<style></style>
