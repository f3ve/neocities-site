<script setup lang="ts">
const router = useRouter();

const routes = router.getRoutes().filter((route) => route.name);
</script>

<template>
  <nav class="flex-row gap-1">
    <c-btn
      v-for="route in routes"
      :to="{ name: route.name }"
      :key="route.name"
      :text="route.name"
    />
  </nav>
</template>
