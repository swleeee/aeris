import { CSSProperties } from 'react'

import { CheckboxProps } from './Checkbox.type'

export interface CheckboxGroupProps {
  options: { label: string; value: string }[]
  value?: string[]
  defaultValue?: string[]
  onChange?: (values: string[]) => void
  disabled?: boolean
  direction?: 'horizontal' | 'vertical'
  size?: CheckboxProps['size']
  style?: CSSProperties
}

export type CheckboxGroupOptionProps = CheckboxProps & {
  value: string
}
