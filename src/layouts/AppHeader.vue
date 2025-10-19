<script lang="ts" setup>
import AppLogo from '@/components/AppLogo.vue'
import AppMenu from '@/components/AppMenu.vue'
</script>

<template>
  <header class="header">
    <AppLogo />
    <AppMenu />
  </header>
</template>

<style scoped>
.header {
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
}
</style>
