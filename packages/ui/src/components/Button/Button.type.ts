import { colorPalette } from '../../styles'

export type ButtonVariant = 'text' | 'link' | 'solid' | 'outlined' | 'round'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: ButtonVariant
  leftIcon?: JSX.Element
  rightIcon?: JSX.Element
  href?: string
  color?: keyof typeof colorPalette
  fontSize?: string
  fontWeight?: number
}
