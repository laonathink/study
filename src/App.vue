<script setup lang="ts"></script>

<template>
  <div class="layout">
    <nav class="menu">
      <router-link to="/upload">上传图片</router-link>
      <router-link to="/sleep">睡觉</router-link>
      <router-link to="/array">数组</router-link>
    </nav>
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  height: 100%;
}

.menu {
  width: 12rem;
  flex: none;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #e5e5e5;
}

.menu a {
  padding: 0.85rem 1rem;
  color: inherit;
  text-decoration: none;
}

.menu a.router-link-active {
  background: #f2f2f2;
}

.content {
  flex: 1;
  min-width: 0;
}
</style>
