import { css } from '@emotion/react'

import { colorPalette } from '../../styles/colors'
import { InputProps } from './Input.type'

export const resetInputStyles = css`
  border: none;
  outline: none;
  background: none;
  padding: 0;
  margin: 0;
  font: inherit;
`

export const getContainerStyles = ({
  style,
  width,
}: Pick<InputProps, 'style' | 'width'>) => css`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${typeof width === 'string' ? width : 'fit-content'};
  ${style && css(style as any)}
`

const getErrorColor = (status: InputProps['error']['status']) => {
  switch (status) {
    case 'error':
      return colorPalette.red[500]
    case 'warning':
      return colorPalette.orange[500]
  }
}

export const getErrorStyles = (status: InputProps['error']['status']) => css`
  color: ${getErrorColor(status)};
`

export const errorMessageStyles = css`
  margin-top: 0.25rem;
`

export const getBorderRadius = (radius: InputProps['borderRadius']) => {
  switch (radius) {
    case 'none':
      return '0px'
    case 'sm':
      return '4px'
    case 'md':
      return '8px'
    case 'lg':
      return '16px'
    case 'full':
      return '9999px'
    default:
      return '4px'
  }
}

export const getLabelStyles = css`
  margin-bottom: 0.25rem;
  width: fit-content;
  font-weight: 500;
  color: ${colorPalette.gray[500]};
`

export const getBaseStyles = ({
  variant,
  size,
  error,
  width,
  color,
  borderRadius,
  readOnly,
  disabled,
}: Pick<
  InputProps,
  | 'variant'
  | 'size'
  | 'error'
  | 'width'
  | 'color'
  | 'borderRadius'
  | 'readOnly'
  | 'disabled'
>) => css`
  display: inline-flex;
  align-items: center;
  width: ${typeof width === 'number' ? `${width / 16}rem` : width};
  border: 1px solid
    ${error ? getErrorColor(error.status) : colorPalette[color][500]};
  border-radius: ${getBorderRadius(borderRadius)};
  padding: ${size === 'small'
    ? '0.5rem'
    : size === 'large'
      ? '1rem'
      : '0.75rem'};
  background-color: ${variant === 'filled'
    ? colorPalette[color]?.['100']
    : 'transparent'};
  transition: border-color 0.2s ease-in-out;

  &:focus-within {
    border-color: ${colorPalette.blue[500]};
  }

  ${disabled &&
  css`
    background-color: ${colorPalette.gray[200]};
    color: ${colorPalette.gray[400]};
    cursor: not-allowed;
  `}

  ${readOnly &&
  css`
    background-color: ${colorPalette.gray[100]};
    color: ${colorPalette.gray[500]};
    cursor: not-allowed;
  `}
`

export const inputStyles = css`
  flex: 1;
  width: 100%;
`

export const lengthStyles = css`
  margin-left: 0.25rem;
`
