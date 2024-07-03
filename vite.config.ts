import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue2 from '@vitejs/plugin-vue2'
import vue2Jsx from '@vitejs/plugin-vue2-jsx'
import UnoCSS from 'unocss/vite'
import cssvariables from 'postcss-css-variables'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS(),
    vue2(),
    vue2Jsx(),
    legacy({
      targets: ['> 1%', 'chrome >= 37'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
  ],
  resolve: {
    alias: {
      '~/': fileURLToPath(new URL('src/', import.meta.url)),
    },
  },
  // @vitejs/plugin-vue2 has a HMR issue, see https://github.com/vitejs/vite-plugin-vue2/issues/69
  server: {
    hmr: false,
  },
  css: {
    postcss: {
      plugins: [
        // Replace css variables with static value, compatible for old browsers
        // See https://github.com/MadLittleMods/postcss-css-variables
        cssvariables({ preserve: false }),
      ],
    },
  },
})
