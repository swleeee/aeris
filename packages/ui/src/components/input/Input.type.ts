import { CSSProperties } from 'react'
import { InputProps as BaseInputProps } from '@aeris/core'

import { colorPalette } from '../../styles'

type BorderRadius = 'none' | 'sm' | 'md' | 'lg' | 'full'

export type InputProps = Omit<BaseInputProps, 'size'> & {
  size?: 'small' | 'medium' | 'large'
  variant?: 'outlined' | 'filled'
  error?: { status: 'error' | 'warning'; message: string }
  label?: string
  fullWidth?: boolean
  color?: keyof typeof colorPalette
  maxLength?: number
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  borderRadius: BorderRadius
  style?: CSSProperties
}
