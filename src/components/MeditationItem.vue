<script lang="ts" setup>
import type { Meditation } from '@/interfaces/meditations.interfaces'

const props = defineProps<Meditation>()
</script>

<template>
  <div class="meditation-item">
    {{ props.title }}
    {{ props.description }}
  </div>
</template>

<style></style>
