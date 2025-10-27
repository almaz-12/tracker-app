<script lang="ts" setup>
import { RouterLink } from 'vue-router'

const { width } = defineProps<{ width: number }>()
</script>

<template>
  <RouterLink to="/">
    <img src="../assets/logo.svg" alt="Медитации" :width="width" />
  </RouterLink>
</template>

<style scoped></style>
