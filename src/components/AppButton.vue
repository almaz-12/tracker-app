<script lang="ts" setup></script>

<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style>
.button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  max-width: 111px;
  width: 100%;
  padding: 10px 16px;
  border-radius: 10px;
  background: var(--color-background);
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: var(--color-text-main);
  cursor: pointer;
  transition: all 0.2s easy-out;
  border: none;
}

.button:hover {
  background: var(--color-background-hover);
}
</style>
