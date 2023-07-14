<template>
  <c-header
    class="flex-col align-center justify-center bg-surface"
    style="height: 90px"
  >
    <h1>
      <c-btn :to="{ name: 'home' }" text="SpacyDude" />
    </h1>
    <nav-links />
  </c-header>
</template>
