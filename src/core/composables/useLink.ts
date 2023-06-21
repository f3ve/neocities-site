/**
 * Inspired by Vuetify useLink composable: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/composables/router.tsx#L52
 *
 * Remember, imitation is the sincerest form of flattery!
 */

import { resolveDynamicComponent } from 'vue';
import type {
  RouteLocationRaw,
  RouterLink as _RouterLink,
  UseLinkOptions,
} from 'vue-router';

export type LinkProps = {
  href?: string;
  replace?: boolean;
  to?: RouteLocationRaw;
  exact?: boolean;
};

export function useLink(props: LinkProps) {
  const RouterLink = resolveDynamicComponent('RouterLink') as
    | typeof _RouterLink
    | string;

  const isLink = computed(() => !!(props.href || props.to));

  if (typeof RouterLink === 'string') {
    return {
      isLink,
      href: toRef(props, 'href'),
    };
  }

  const link = props.to
    ? RouterLink.useLink(props as UseLinkOptions)
    : undefined;

  return {
    isLink,
    route: link?.route,
    navigate: link?.navigate,
    isActive:
      link &&
      computed(() =>
        props.exact ? link.isExactActive?.value : link.isActive?.value
      ),
    href: computed(() => (props.to ? link?.route.value.href : props.href)),
  };
}
