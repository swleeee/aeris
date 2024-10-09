import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'Core',
      formats: ['es', 'cjs'],
      fileName: (format) => `core.${format}.js`,
    },
  },
})
