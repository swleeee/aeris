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

export const getContainerStyle = ({
  style,
  fullWidth,
}: Pick<InputProps, 'style' | 'fullWidth'>) => css`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${fullWidth ? '100%' : 'auto'};
  ${style && css(style as any)}
`

export const getErrorMessageStyle = (
  status: InputProps['error']['status']
) => css`
  color: ${status === 'error'
    ? colorPalette.red[500]
    : colorPalette.orange[500]};
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

export const getLabelStyle = css`
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: ${colorPalette.gray[500]};
`

export const getBaseStyles = ({
  variant,
  size,
  error,
  fullWidth,
  color,
  borderRadius,
}: Pick<
  InputProps,
  'variant' | 'size' | 'error' | 'fullWidth' | 'color' | 'borderRadius'
>) => css`
  display: inline-flex;
  align-items: center;
  width: ${fullWidth ? '100%' : 'auto'};
  border: 1px solid ${error ? colorPalette.red[500] : colorPalette[color][500]};
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

  &[readOnly] {
    background-color: ${colorPalette.gray[100]};
    color: ${colorPalette.gray[500]};
    cursor: not-allowed;
  }

  &:disabled {
    background-color: ${colorPalette.gray[200]};
    color: ${colorPalette.gray[400]};
    cursor: not-allowed;
  }
`
