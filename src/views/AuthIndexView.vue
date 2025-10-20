<script lang="ts" setup>
import AppButton from '@/components/AppButton.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import router from '@/router'

function goLogin() {
  router.push({ name: 'login' })
}
</script>

<template>
  <AuthLayout>
    <div class="welcome">
      <div class="welcome__title">Добро пожаловать!</div>
      <div class="welcome__text">
        Медитируй и оставайся в фокусе,<br />
        чтобы быть счастливым.
      </div>

      <AppButton class="welcome__btn" @click="goLogin">Войти в приложение</AppButton>
    </div>
  </AuthLayout>
</template>

<style scoped>
.welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}
.welcome__title {
  font-weight: 700;
  font-size: 34px;
  line-height: 46px;
  text-align: center;
  color: #ffffff;
}
.welcome__text {
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;

  color: #ffffff;
}
.welcome__btn {
  padding: 15px 16px;
  margin-top: 60px;
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  background-color: rgb(124, 154, 146);
}
</style>
