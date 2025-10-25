<script lang="ts" setup>
import FeelingList from '@/components/FeelingList.vue'
import UserProfile from '@/components/UserProfile.vue'
</script>

<template>
  <div class="sidebar">
    <UserProfile />
    <FeelingList />
  </div>
</template>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
