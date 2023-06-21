<template>
  <c-container>
    <default-header />
    <div class="flex-row fluid">
      <default-drawer />
      <main>
        <router-view />
      </main>
    </div>
  </c-container>
</template>
