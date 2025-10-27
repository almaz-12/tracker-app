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

.total_minutes {
  background: url('@/assets/total_minutes.png') no-repeat center/cover;
}
.total_calm {
  background: url('@/assets/total_calm.png') no-repeat center/cover;
}
.total_relax {
  background: url('@/assets/total_relax.png') no-repeat center/cover;
}
.total_focus {
  background: url('@/assets/total_focus.png') no-repeat center/cover;
}
.total_anxiety {
  background: url('@/assets/total_anxiety.png') no-repeat center/cover;
}
</style>
