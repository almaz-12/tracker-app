<script lang="ts" setup>
import { LOGO } from '@/common/constants'
import AppLogo from '@/components/AppLogo.vue'
import AppMenu from '@/components/AppMenu.vue'

const logoSize = LOGO.small
</script>

<template>
  <header class="header">
    <AppLogo :width="logoSize" />
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
