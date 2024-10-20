import { forwardRef } from 'react'
import { BaseInput } from '@aeris/core'

import {
  errorMessageStyles,
  getBaseStyles,
  getContainerStyles,
  getErrorStyles,
  getLabelStyles,
  inputStyles,
  lengthStyles,
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
      showLength = false,
      variant = 'outlined',
      width = '100%',
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
      width,
      color,
      borderRadius,
      readOnly,
      disabled,
    })
    const containerStyles = getContainerStyles({ style, width })
    const errorStyles = error ? getErrorStyles(error.status) : undefined

    return (
      <div css={containerStyles}>
        {label && (
          <label css={getLabelStyles} htmlFor={id}>
            {label}
          </label>
        )}
        <div css={[baseStyles]}>
          {prefix && <span css={{ marginRight: '0.5rem' }}>{prefix}</span>}
          <BaseInput
            css={[resetInputStyles, inputStyles, errorStyles]}
            ref={ref}
            id={id}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            maxLength={maxLength}
            {...(value === undefined ? { defaultValue } : { value, onChange })}
            {...props}
          />
          {suffix && <span css={{ marginLeft: '0.5rem' }}>{suffix}</span>}
          {showLength && (
            <p
              css={lengthStyles}
            >{`${(value as string)?.length || 0}/${maxLength}`}</p>
          )}
        </div>
        {error && (
          <p css={[errorStyles, errorMessageStyles]}>{error.message}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
