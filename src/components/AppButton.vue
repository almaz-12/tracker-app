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
  justify-content: center;
  gap: 10px;
  max-width: 120px;
  width: 100%;
  padding: 10px 16px;
  border-radius: 10px;
  background: var(--color-background);
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: var(--color-text-main);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: none;
}

.button:hover {
  background: var(--color-background-hover);
}

.auth-btn {
  max-width: 320px;
  padding: 15px 16px;
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  background-color: rgb(124, 154, 146);
  border-radius: 30px;
  text-decoration: none;
  text-align: center;
  color: #fff;
}
</style>
