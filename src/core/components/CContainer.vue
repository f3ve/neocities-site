<template>
  <div class="c-container">
    <slot />
  </div>
</template>

<style lang="scss">
@use '../../styles/flexHelpers.scss';

.c-container {
  @extend .flex-col, .align-center;
  height: 100%;
  width: 100%;
}
</style>
