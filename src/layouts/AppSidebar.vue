<script lang="ts" setup>
import VoteList from '@/components/VoteList.vue'
import UserProfile from '@/components/UserProfile.vue'
</script>

<template>
  <div class="sidebar">
    <UserProfile />
    <VoteList />
  </div>
</template>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
