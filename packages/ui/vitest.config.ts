import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // NOTE: React 컴포넌트 테스트를 위해 JSDOM 환경 설정
    globals: true, // NOTE: Vitest의 전역 매처를 활성화
  },
})
