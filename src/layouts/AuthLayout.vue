<script lang="ts" setup>
import { LOGO } from '@/common/constants'
import AppLogo from '@/components/AppLogo.vue'

const logoSize = LOGO.big
</script>

<template>
  <div class="auth">
    <AppLogo :width="logoSize" />
    <div class="auth__content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.auth {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  background: url(../assets/auth-bg.jpg) no-repeat center/cover;
}

.auth__content {
  max-width: 320px;
  width: 100%;
}
</style>
