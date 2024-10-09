// stories: 스토리 파일이 위치하는 경로를 정의합니다. src 폴더 안에 .stories.js 또는 .stories.tsx 파일을 사용합니다.
// addons: 추가 기능을 정의합니다. @storybook/addon-essentials는 기본적인 애드온을 포함합니다.

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: '@storybook/react',
}
