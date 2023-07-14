<script lang="ts" setup>
const content = ref<{ text: string; tag: string; id: string }[]>([]);
onMounted(() => {
  const $md = document.querySelector('.markdown-body');
  const $contents = $md?.querySelectorAll('h1, h2, h3, h4, h5, h6');

  if ($contents) {
    for (let i = 0, l = $contents.length; i < l; i++) {
      const $el = $contents[i];
      if ($el.textContent) {
        const id = $el.textContent.toLocaleLowerCase().replace(/\s/g, '-');
        $el.id = id;
        content.value.push({ text: $el.textContent, id, tag: $el.tagName });
      }
    }
  }
});
</script>

<template>
  <aside class="bg-surface flex-col align-center side-drawer">
    <h2>Contents</h2>
    <ol>
      <li v-for="header in content" :key="header.id">
        <c-btn :href="`#${header.id}`" :text="header.text" />
      </li>
    </ol>
  </aside>
</template>

<style lang="scss">
.side-drawer {
  width: 500px !important;
}
</style>
