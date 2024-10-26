import { InputHTMLAttributes, ReactNode } from 'react'

type ControlledProps = {
  checked: boolean
  onChange: (checked: boolean) => void
  defaultChecked?: never
}

type UncontrolledProps = {
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  checked?: never
}

type CheckboxChildrenProps = {
  isDefaultChecked: boolean
}

export type CheckboxProps = (ControlledProps | UncontrolledProps) &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'children'> & {
    children?: (props: CheckboxChildrenProps) => ReactNode
  }
