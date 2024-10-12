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
      name: '@aeris/core',
      // NOTE: ES 모듈과 CommonJS 모듈 형식으로 빌드를 설정
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
})

/**
 * NOTE: UMD (Universal Module Definition)란?
 * UMD는 모듈 정의 방식 중 하나로, 브라우저 환경이나 Node.js 환경에서도 동작할 수 있게 모듈을 정의하는 형식
 * UMD는 AMD, CommonJS, 그리고 브라우저에서 바로 로드할 수 있는 형태로 모듈을 빌드할 수 있는 구조
 *
 * globals 설정의 목적
 * globals 설정은 UMD 환경에서 외부 의존성을 전역 변수로 참조할 때 사용
 * 예를 들어, react를 UMD 환경에서 사용할 때는 전역 변수인 React로 참조
 * 만약 이 설정이 없다면, UMD 환경에서 react 의존성을 찾지 못해 런타임 에러 발생 가능
 *
 * 글로벌 참조의 실제 사용 예시
 * 만약 외부 프로젝트가 브라우저에서 전역으로 React를 선언해 놓았을 경우, @aeris/core가 내부적으로 react를 직접 포함하지 않고, 전역 React 변수를 참조하는 구조로 동작
 * 이를 통해 모듈 충돌을 방지하고, 외부 환경에 맞게 유연하게 동작 가능
 */
