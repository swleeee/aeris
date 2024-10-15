// stories: 스토리 파일이 위치하는 경로를 정의합니다. src 폴더 안에 .stories.js 또는 .stories.tsx 파일을 사용합니다.
// addons: 추가 기능을 정의합니다. @storybook/addon-essentials는 기본적인 애드온을 포함합니다.

import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'], // 경로가 정확한지 확인
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-styling',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite', // Vite 빌더 추가
  },
  docs: {
    autodocs: 'tag',
  },
}

export default config
