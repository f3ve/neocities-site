<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <c-container style="position: relative" class="gap-2">
    <default-header />
    <div class="flex-row fluid gap-2">
      <default-drawer
        v-if="route.path.includes('/blog/') && route.name !== 'blog'"
      />
      <main style="height: 100% !important">
        <router-view />
      </main>
    </div>
  </c-container>
</template>
