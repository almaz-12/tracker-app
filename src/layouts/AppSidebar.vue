<script lang="ts" setup>
import AppVote from '@/components/AppVote.vue'
import UserProfile from '@/components/UserProfile.vue'
</script>

<template>
  <div class="sidebar">
    <UserProfile name="Алмаз" />
    <AppVote />
  </div>
</template>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
