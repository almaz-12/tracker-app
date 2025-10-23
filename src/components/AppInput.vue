<script lang="ts" setup>
import { onMounted, useTemplateRef } from 'vue'

const data = defineModel<string>()
const { autofocus } = defineProps({
  autofocus: {
    type: Boolean,
    default: false,
  },
})

const input = useTemplateRef('input')

onMounted(() => {
  if (autofocus) {
    input.value?.focus()
  }
})
</script>

<template>
  <input ref="input" v-model="data" class="input" />
</template>

<style>
.input {
  padding: 12px 10px;
  border: none;
  background: none;
  border-bottom: 1px solid #ffffff;
  font-size: 18px;
  line-height: 22px;
  color: #bec2c2;
  outline: none;
}

.input::placeholder {
  font-size: 18px;
  line-height: 22px;
  color: #bec2c2;
}
</style>
