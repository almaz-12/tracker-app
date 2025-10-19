<script lang="ts" setup>
import IconFocus from '@/icons/IconFocus.vue'
import IconOk from '@/icons/IconOk.vue'
import IconRelax from '@/icons/IconRelax.vue'
</script>

<template>
  <div class="vote">
    <div class="vote__title">Как вы сегодня себя чувствуете?</div>
    <div class="vote__questions">
      <div class="vote__questions-item">
        <div class="vote__questions-img"><IconOk /></div>
        <div class="vote__questions-text">Спокойно</div>
      </div>
      <div class="vote__questions-item">
        <div class="vote__questions-img"><IconRelax /></div>
        <div class="vote__questions-text">Расслабленно</div>
      </div>
      <div class="vote__questions-item">
        <div class="vote__questions-img"><IconFocus /></div>
        <div class="vote__questions-text">Фокусировано</div>
      </div>
      <div class="vote__questions-item">
        <div class="vote__questions-img"><IconFocus /></div>
        <div class="vote__questions-text">Тревожно</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.vote {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
}
.vote__title {
  font-size: 22px;
  line-height: 100%;
  color: rgba(255, 255, 255, 0.7);
}

.vote__questions {
  display: flex;
  gap: 20px;
}
.vote__questions-item {
  text-align: center;
  cursor: pointer;
}
.vote__questions-img {
  width: 62px;
  height: 65px;
  margin: auto;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease-in-out;
}

.vote__questions-item:hover .vote__questions-img {
  background: rgba(105, 176, 156, 1);
}
</style>
