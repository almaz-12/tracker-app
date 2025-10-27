<script setup lang="ts">
interface Props {
  isOpened?: boolean
  message: string
}
const { isOpened, message } = defineProps<Props>()
const emit = defineEmits<{
  (e: 'ok'): void
}>()
</script>

<template>
  <transition name="fade">
    <teleport to="#modals">
      <div class="popup-cover" v-if="isOpened">
        <div class="popup">
          {{ message }}
          <div class="popup__actions">
            <button @click="emit('ok')">Закрыть</button>
          </div>
        </div>
      </div>
    </teleport>
  </transition>
</template>

<style scoped>
.popup-cover {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* полупрозрачный фон */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999; /* высокий z-index */
}

.popup {
  padding: 20px;
  border-radius: 20px;
  background-color: #fff;
  max-width: 350px;
  width: 100%;
  text-align: center;
  color: #000;
  font-weight: 700;
  font-size: 20px;
}
.popup__actions {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 20px;
}

.popup__actions button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: var(--color-background-btn);
  color: #fff;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
