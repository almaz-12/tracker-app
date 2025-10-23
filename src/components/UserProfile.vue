<script lang="ts" setup>
import { useProfileStore } from '@/stores/profile.store'
import { onMounted } from 'vue'

const profileStore = useProfileStore()

onMounted(() => {
  profileStore.getProfile()
})
</script>

<template>
  <div class="user-profile">
    <img src="@/assets/Avatar.png" :alt="profileStore.profile?.username" />
    <div class="user-profile__text">
      Добро пожаловать,
      {{ profileStore.profile ? profileStore.profile?.username : 'Пользователь' }}
    </div>
  </div>
</template>

<style scoped>
.user-profile {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: flex-start;
  padding-top: 23px;
}

.user-profile__text {
  font-weight: 500;
  font-size: 30px;
  line-height: 100%;
  color: rgba(255, 255, 255, 1);
}
</style>
