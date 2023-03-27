import { mergeConfig, UserConfig } from 'vite'
import { defineConfig as defineVitestConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default defineVitestConfig(() => {
  const config = mergeConfig(
    viteConfig,
    defineVitestConfig({
      test: {
        name: 'myLib',
        reporters: 'verbose',
      },
    }),
  )
  return config as UserConfig
})
