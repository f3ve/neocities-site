<route lang="yaml">
name: blog
</route>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const posts = router
  .getRoutes()
  .filter((route) => route.path.includes('/blog/') && route.name !== 'blog');
</script>

<template>
  <c-container
    class="bg-surface-lighten-1 flex-col justify-center align-center"
  >
    <c-btn
      v-for="post in posts"
      :key="post.name"
      :to="post.path"
      :text="post.name"
    />
  </c-container>
</template>
