import { InputHTMLAttributes } from 'react'

type ControlledProps = {
  value: string
  defaultValue?: never
  onChange: (value: string) => void
}

type UncontrolledProps = {
  value?: never
  defaultValue: string
  onChange?: never
}

export type InputProps = (ControlledProps | UncontrolledProps) &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
    id: string
    placeholder?: string
    disabled?: boolean
  }