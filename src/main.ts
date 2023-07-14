import '@/styles/globals.scss';

import App from '@/App.vue';
import { ViteSSG } from 'vite-ssg';
// import { createHead } from '@unhead/vue';
import { setupLayouts } from 'virtual:generated-layouts';
import generatedLayouts from 'virtual:generated-pages';

import 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';

const routes = setupLayouts(generatedLayouts);

export const createApp = ViteSSG(
  App,
  {
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) return savedPosition;
      return { top: 0 };
    },
    routes,
  },
  ({ app }) => {
    // const head = createHead();
    app.use(createPinia());
    // app.use(head);
  }
);
