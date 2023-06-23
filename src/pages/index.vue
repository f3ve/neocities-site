<route lang="yaml">
name: home
</route>

<template>
  <c-container
    class="bg-surface-lighten-1 flex-col justify-center align-center"
  >
    Page body
    <c-btn :to="{ name: 'blog' }">Blog</c-btn>
  </c-container>
</template>
