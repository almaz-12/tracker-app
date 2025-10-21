<script lang="ts" setup>
import MeditationList from '@/components/MeditationList.vue'
import AppLayout from '@/layouts/AppLayout.vue'
import AppSidebar from '@/layouts/AppSidebar.vue'
import { useAuthStore } from '@/stores/auth.store'
import { useProfileStore } from '@/stores/profile.store'
import { onMounted } from 'vue'

const profileStore = useProfileStore()
const authStore = useAuthStore()

onMounted(() => {
  profileStore.getProfile()
  authStore.login('asd', 'asd')
})
</script>

<template>
  <AppLayout>
    <AppSidebar />
    <MeditationList />
  </AppLayout>
</template>

<style></style>
