<script lang="ts" setup>
import { MOOD_STATES } from '@/common/constants'
import VoteItem from './VoteItem.vue'
</script>

<template>
  <div class="vote">
    <div class="vote__title">Как вы сегодня себя чувствуете?</div>
    <div class="vote__questions">
      <div class="vote__questions-item" v-for="state in MOOD_STATES">
        <VoteItem :name="state" :key="state" />
      </div>
    </div>
  </div>
</template>

<style>
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

.vote__questions-item:hover .vote__questions-img {
  background: rgba(105, 176, 156, 1);
}
</style>
