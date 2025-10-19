<script lang="ts" setup>
const { name } = defineProps<{ name: string }>()
</script>

<template>
  <div class="user-profile">
    <img src="@/assets/Avatar.png" alt="аватар" />
    <div class="user-profile__text">Добро пожаловать, {{ name }}!</div>
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
