import { forwardRef } from 'react'
import { BaseInput } from '@aeris/core'

import {
  getBaseStyles,
  getContainerStyle,
  getErrorMessageStyle,
  getLabelStyle,
  resetInputStyles,
} from './Input.style'
import { colorPalette } from '../../styles'
import { InputProps } from './Input.type'

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      disabled = false,
      readOnly = false,
      fullWidth = false,
      variant = 'outlined',
      size = 'medium',
      color = 'gray',
      borderRadius = 'md',
      style,
      maxLength,
      prefix,
      suffix,
      error,
      label,
      placeholder,
      value,
      defaultValue,
      onChange,
      ...props
    },
    ref
  ) => {
    const baseStyles = getBaseStyles({
      variant,
      size,
      error,
      fullWidth,
      color,
      borderRadius,
    })
    const containerStyles = getContainerStyle({ style, fullWidth })
    const errorStyles = error ? getErrorMessageStyle(error.status) : undefined

    return (
      <div css={containerStyles}>
        {label && (
          <label css={getLabelStyle} htmlFor={id}>
            {label}
          </label>
        )}
        <div css={[baseStyles, errorStyles]}>
          {prefix && <span css={{ marginRight: '0.5rem' }}>{prefix}</span>}
          <BaseInput
            css={resetInputStyles}
            ref={ref}
            id={id}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            {...(value === undefined ? { defaultValue } : { value, onChange })}
            {...props}
          />
          {suffix && <span css={{ marginLeft: '0.5rem' }}>{suffix}</span>}
          {maxLength && (
            <p>{`${(value as string)?.length || 0}/${maxLength}`}</p>
          )}
        </div>
        {error && <p css={errorStyles}>{error.message}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
