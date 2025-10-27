<script lang="ts" setup>
const props = defineProps<{ type: string; count: number; text: string }>()
</script>

<template>
  <div class="statistic-item" :class="props.type">
    <div class="statistic-item__count">{{ props.count }}</div>
    <div class="statistic-item__text">{{ props.text }}</div>
  </div>
</template>

<style scoped>
.statistic-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 47px;
  padding: 10px 20px 20px;
  border-radius: 20px;
  background: #69b09c;
}

.statistic-item__count {
  font-weight: 700;
  font-size: 80px;
  line-height: 96px;
  text-align: right;
  color: #ffffff;
}

.statistic-item__text {
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
}

.duration_min {
  background: url('@/assets/duration_min-bg.png') no-repeat center/cover;
}
</style>
