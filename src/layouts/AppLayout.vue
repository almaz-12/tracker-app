<script lang="ts" setup>
import AppHeader from './AppHeader.vue'
</script>

<template>
  <div class="container">
    <AppHeader />
    <main class="main">
      <slot></slot>
    </main>
  </div>
</template>

<style scoped>
.container {
  max-width: 1230px;
  padding: 0 15px;
  margin: auto;
}
.main {
  display: grid;
  grid-template-columns: minmax(200px, 370px) minmax(600px, 700px);
  justify-content: space-between;
}
</style>
