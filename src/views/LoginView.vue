<script lang="ts" setup>
import AppInput from '@/components/AppInput.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import AppButton from '@/components/AppButton.vue'
import { computed, reactive, ref } from 'vue'
import { useAuthStore } from '@/stores/auth.store'
import { validator } from '@/utils/validator'

const authStore = useAuthStore()

const formData = reactive({
  username: '',
  password: '',
})

const isValidate = computed(() => {
  return validator.username(formData.username) && validator.password(formData.password)
})

async function submitForm() {
  if (!isValidate.value) return
  await authStore.login(formData.username, formData.password)
}
</script>

<template>
  <AuthLayout>
    <div class="error" v-if="authStore.errorMessage">
      {{ authStore.errorMessage }}
    </div>
    <form class="auth-form" @submit.prevent="submitForm">
      <AppInput placeholder="Имя пользователя" v-model="formData.username" :autofocus="true" />
      <AppInput placeholder="Пароль" v-model="formData.password" />
      <AppButton class="auth-btn" :disabled="!isValidate">{{
        authStore.isLoading ? 'Отправка' : 'Войти в приложение'
      }}</AppButton>
      <router-link class="auth-btn" to="/auth/register">Зарегистрироваться</router-link>
    </form>
  </AuthLayout>
</template>

<style scoped></style>
