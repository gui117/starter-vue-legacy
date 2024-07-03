import { antfu } from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  unocss: true,
  vue: {
    vueVersion: 2,
  },
  ignores: ['**/dist/**', '**/node_modules/**', '**/build/**'],
})
