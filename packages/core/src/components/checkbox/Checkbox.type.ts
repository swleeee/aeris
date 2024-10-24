import { InputHTMLAttributes } from 'react'

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

export type CheckboxProps = (ControlledProps | UncontrolledProps) &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>
