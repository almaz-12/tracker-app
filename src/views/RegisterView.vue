<script lang="ts" setup>
import AppInput from '@/components/AppInput.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import AppButton from '@/components/AppButton.vue'
import { computed, reactive } from 'vue'
import router from '@/router'
import { useAuthStore } from '@/stores/auth.store'
import { validator } from '@/utils/validator'

const authStore = useAuthStore()

const formData = reactive({
  username: '',
  email: '',
  password: '',
})

const isValidate = computed(() => {
  return validator.username(formData.username) && validator.password(formData.password)
})

async function submitForm() {
  if (!isValidate.value) return

  try {
    await authStore.register(formData.username, formData.email, formData.password)

    if (authStore.getToken) {
      router.replace({ name: 'main' })
      Object.assign(formData, { username: '', email: '', password: '' })
    }
  } catch (error) {
    console.error('Login failed:', error)
  }
}
</script>

<template>
  <AuthLayout>
    <div class="error" v-if="authStore.errorMessage">
      {{ authStore.errorMessage }}
    </div>
    <form class="auth-form" @submit.prevent="submitForm">
      <AppInput placeholder="Имя пользователя" v-model="formData.username" :autofocus="true" />
      <AppInput placeholder="Email" v-model="formData.email" />
      <AppInput placeholder="Пароль" v-model="formData.password" />
      <AppButton class="auth-btn" :disabled="!isValidate">{{
        authStore.isLoading ? 'Отправка' : 'Регистрация'
      }}</AppButton>
      <router-link class="auth-btn" to="/auth/login">Войти</router-link>
    </form>
  </AuthLayout>
</template>

<style scoped></style>
