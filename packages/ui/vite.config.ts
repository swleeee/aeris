import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    // NOTE: 라이브러리로 빌드할 때 필요한 설정
    lib: {
      // NOTE: 빌드 시 시작할 엔트리 파일 경로를 설정
      entry: path.resolve(__dirname, 'src/index.ts'),
      // NOTE: 라이브러리의 이름을 설정
      name: '@aeris/ui',
      // ES 모듈과 CommonJS 모듈 형식으로 빌드를 설정
      formats: ['es', 'cjs'],
      // NOTE: 형식에 맞는 파일 이름을 정의 (ex: 'index.es.js', 'index.cjs.js' 등의 형식으로 출력)
      fileName: (format) => `index.${format}.js`,
    },
    // NOTE: Rollup과 관련된 추가 설정
    rollupOptions: {
      // NOTE: 빌드에서 제외할 외부 패키지 설정
      external: ['react', 'react-dom'],
      // NOTE: 외부 패키지를 전역 변수로 정의하여 외부 환경에서 사용 가능하게 함
      output: {
        // NOTE: 'react'를 'React'라는 전역 변수로, 'react-dom'을 'ReactDOM'으로 지정
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  // NOTE: 모듈 해석과 관련된 설정
  resolve: {
    alias: {
      /**
       * NOTE: '@aeris/core'라는 경로를 '@aeris/core' 패키지의 src 폴더로 매핑.
       *        @aeris/ui에서 @aeris/core의 코드를 직접 참조할 수 있게 함
       */
      '@aeris/core': path.resolve(__dirname, '../core/src'),
    },
  },
})
