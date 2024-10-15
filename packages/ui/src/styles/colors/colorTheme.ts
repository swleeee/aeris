import { colorPalette } from './colorPalette'

// NOTE: 색상 테마의 타입 정의
export interface ColorScheme {
  primary: {
    color: keyof typeof colorPalette
    shade: keyof (typeof colorPalette)['gray']
  }
  secondary: {
    color: keyof typeof colorPalette
    shade: keyof (typeof colorPalette)['gray']
  }
}

// NOTE: 기본 색상 테마
export const defaultColorScheme: ColorScheme = {
  primary: {
    color: 'blue',
    shade: 500,
  },
  secondary: {
    color: 'green',
    shade: 300,
  },
}
