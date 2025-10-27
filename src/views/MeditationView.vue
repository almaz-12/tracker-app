<script lang="ts" setup>
import IconPause from '@/icons/IconPause.vue'
import IconStart from '@/icons/IconStart.vue'
import IconCheck from '@/icons/IconCheck.vue'
import IconReload from '@/icons/IconReload.vue'
import AppHeader from '@/layouts/AppHeader.vue'
import PopupAlert from '@/components/PopupAlert.vue'

import { ref, onUnmounted } from 'vue'
import { formatTime } from '@/utils/timer'
import { INIT_TIME } from '@/common/constants'
import { useStatsStore } from '@/stores/stats.store'
import StatisticItem from '@/components/StatisticItem.vue'

const isStart = ref(false)
const timer = ref(INIT_TIME)
const timerInterval = ref<number | null>(null)
const elapsedTime = ref(0)
const statStore = useStatsStore()
const isPopupOpened = ref(false)

const startTimer = () => {
  isStart.value = true
  timerInterval.value = window.setInterval(() => {
    if (timer.value > 0) {
      timer.value--
      elapsedTime.value++
    } else {
      stopTimer()
    }
  }, 1000)
}

const stopTimer = () => {
  isStart.value = false
  if (timerInterval.value) {
    clearInterval(timerInterval.value)
    timerInterval.value = null
  }
}

const toggleTimer = () => {
  if (isStart.value) {
    stopTimer()
  } else {
    startTimer()
  }
}

async function sendTime() {
  await statStore.setStat('duration_min', elapsedTime.value)
  isPopupOpened.value = true
  reloadTimer()
}

function reloadTimer() {
  timer.value = INIT_TIME
  isStart.value = false
  elapsedTime.value = 0
  if (timerInterval.value) {
    clearInterval(timerInterval.value)
  }
}

onUnmounted(() => {
  if (timerInterval.value) {
    clearInterval(timerInterval.value)
  }
})
</script>

<template>
  <div class="container">
    <AppHeader />

    <div class="meditation-detail">
      <div class="meditation-detail__image">
        <div class="meditation-detail__counter">{{ formatTime(timer) }}</div>
      </div>
      <div class="meditation-detail__title">Ежедневная</div>
      <div class="meditation-detail__desc">Стандартная медитация для ежедневной осознанности</div>

      <div class="meditation-detail__action">
        <button
          class="meditation-detail__btn"
          @click="reloadTimer"
          :disabled="!elapsedTime"
          title="Перезапустить"
        >
          <IconReload />
        </button>
        <button class="meditation-detail__btn" @click="toggleTimer">
          <IconStart v-if="!isStart" />
          <IconPause v-else />
        </button>
        <button
          class="meditation-detail__btn"
          @click="sendTime"
          title="Сохранить время"
          :disabled="!elapsedTime"
        >
          <IconCheck />
        </button>
      </div>
    </div>

    <PopupAlert message="Данные сохранены" :is-opened="isPopupOpened" @ok="isPopupOpened = false" />
  </div>
</template>

<style scoped>
.meditation-detail {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 50px 0;
}
.meditation-detail__image {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
  background: url('@/assets/meditation-item-bg.png');
  border-radius: 100%;
  overflow: hidden;
}

.meditation-detail__counter {
  font-size: 44px;
  line-height: 53px;
  color: #ffffff;
}

.meditation-detail__title {
  font-weight: 500;
  font-size: 35px;
  line-height: 48px;
  color: #ffffff;
}

.meditation-detail__btn {
  padding: 0;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  width: 75px;
  height: 75px;
  border-radius: 100%;
  overflow: hidden;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.meditation-detail__desc {
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  color: #ffffff;
  opacity: 0.5;
}

.meditation-detail__action {
  display: flex;
  gap: 30px;
  align-items: center;
}
</style>
