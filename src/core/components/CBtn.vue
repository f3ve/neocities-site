<script setup lang="ts">
/**
 * Inspired by Vuetify VBtn component: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VBtn/VBtn.tsx
 *
 * Remember, imitation is the sincerest form of flattery!
 */
import type { LinkProps } from '@/core/composables/useLink';

const props = defineProps<
  LinkProps & {
    disabled?: boolean;
  }
>();

const link = useLink(props);

const tag = computed(() => (link.isLink.value ? 'a' : 'button'));

function onClick(e: MouseEvent) {
  if (props.disabled) return;
  link.navigate?.(e);
}
</script>

<template>
  <tag :href="link.href.value" @click="onClick">
    <slot />
  </tag>
</template>
