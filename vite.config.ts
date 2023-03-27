import path from 'node:path'
import { defineConfig } from 'vite'
import packageJson from './package.json'

const isDev = process.env.NODE_ENV === 'development'

const pascalCase = (str: string) => {
  return str.replace(/(^\w|-\w)/g, (match) => {
    return match.replace('-', '').toUpperCase()
  })
}

const pkgName = packageJson.name
const pascalPkgName = pascalCase(pkgName)

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  define: {
    __DEV__: isDev,
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: pascalPkgName,
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => {
        return `${format}/${pkgName}.js`
      },
    },
  },
})
