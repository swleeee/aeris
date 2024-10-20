import { CSSProperties } from 'react'
import { InputProps as BaseInputProps } from '@aeris/core'

import { colorPalette } from '../../styles'

type BorderRadius = 'none' | 'sm' | 'md' | 'lg' | 'full'

export type InputProps = Omit<BaseInputProps, 'size'> & {
  showLength?: boolean
  size?: 'small' | 'medium' | 'large'
  variant?: 'outlined' | 'filled'
  error?: { status: 'error' | 'warning'; message: string }
  label?: string
  color?: keyof typeof colorPalette
  width?: string | number
  maxLength?: number
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  borderRadius?: BorderRadius
  style?: CSSProperties
}
