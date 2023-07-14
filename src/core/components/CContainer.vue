<template>
  <div class="c-container">
    <slot />
  </div>
</template>

<style lang="scss">
@use '../../styles/flexHelpers.scss';

.c-container {
  @extend .flex-col, .align-center;

  min-height: 100%;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
</style>
