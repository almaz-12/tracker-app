<script lang="ts" setup>
import { RouterLink } from 'vue-router'

const { width } = defineProps<{ width: number }>()
</script>

<template>
  <RouterLink to="main">
    <img src="../assets/logo.svg" alt="Лого" :width="width" />
  </RouterLink>
</template>

<style scoped></style>
