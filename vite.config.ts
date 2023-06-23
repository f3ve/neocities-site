import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import Markdown from 'vite-plugin-vue-markdown';
import prism from 'markdown-it-prism';

import 'vite-ssg';

export default defineConfig({
  optimizeDeps: {
    entries: ['./src/**/*.vue'],
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  ssgOptions: {
    script: 'async',
    formatting: 'prettify',
    format: 'cjs',
    crittersOptions: {
      pruneSource: true,
    },
  },

  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),

    AutoImport({
      imports: [
        'vue',
        'pinia',
        {
          'vue-router': [
            'createRouter',
            'createWebHistory',
            'useRouter',
            'useRoute',
          ],
        },
      ],
      dirs: ['src/core/composables', 'src/store'],
      vueTemplate: true,
      dts: './src/auto-import.d.ts',
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
    }),

    Components({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dirs: [
        'src/core/components',
        'src/layouts/**/components/**',
        'src/pages/**/components/**',
      ],
    }),

    Pages({
      exclude: ['**/components/**'],
      extensions: ['vue', 'md'],
    }),

    Layouts({
      exclude: ['**/components/**'],
      layoutsDirs: ['src/layouts'],
    }),

    Markdown({
      headEnabled: true,
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
        xhtmlOut: false,
        quotes: '“”‘’',
        breaks: false,
      },
      markdownItSetup(md) {
        md.use(prism);
      },
    }),
  ],
});
