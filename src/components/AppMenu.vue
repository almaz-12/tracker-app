<script lang="ts" setup></script>

<template>
  <nav class="nav">
    <ul class="menu-list">
      <li class="menu-list__item">
        <RouterLink to="/" active-class="menu-list__link--active" class="menu-list__link">
          Медитация
        </RouterLink>
      </li>
      <li class="menu-list__item">
        <RouterLink to="/statistics" active-class="menu-list__link--active" class="menu-list__link">
          Статистика
        </RouterLink>
      </li>
      <li class="menu-list__item">
        <RouterLink to="/logout" class="menu-list__link"> Выход </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.menu-list {
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.menu-list__item {
  flex-basis: 210px;
  flex-shrink: 1;
  padding: 22px 55px;
  border-right: 3px solid rgba(58, 80, 81, 1);
}
.menu-list__link {
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  font-size: 22px;
  line-height: 100%;
  transition: all 0.2s ease-in-out;
}

.menu-list__item:last-child {
  border: none;
}
.menu-list__link:hover,
.menu-list__link--active {
  color: rgba(255, 255, 255, 1);
}
</style>
