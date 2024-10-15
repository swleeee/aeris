import { css } from '@emotion/react'

import { colorPalette } from '../../styles'
import { ButtonVariant } from './Button.type'

export const getBaseStyles = ({
  fontSize,
  fontWeight,
}: {
  fontSize: string
  fontWeight: number
}) => css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  transition: all 0.2s ease;
  text-decoration: none;
  cursor: pointer;

  &:disabled {
    color: #fff;
    background-color: #ccc;
    cursor: not-allowed;
  }
`

export const getVariantStyles = ({
  variant,
  color,
}: {
  variant: ButtonVariant
  color: keyof typeof colorPalette
}) => {
  const selectedColor = colorPalette[color]?.['500'] || colorPalette[color]

  return {
    solid: css`
      border: none;
      color: white;
      background-color: ${selectedColor};

      &:hover {
        background-color: ${colorPalette[color]?.['600'] || selectedColor};
      }
    `,
    outlined: css`
      border: 2px solid ${selectedColor};
      color: ${selectedColor};
      background: none;

      &:disabled {
        border-color: #ccc;
        color: #ccc;
      }

      &:not(:disabled):hover {
        color: white;
        background-color: ${selectedColor};
      }
    `,
    text: css`
      border: none;
      color: ${selectedColor};
      background: none;
      text-decoration: underline;

      &:not(:disabled):hover {
        text-decoration: none;
      }
    `,
    link: css`
      border: none;
      color: ${selectedColor};
      background: none;
      text-decoration: underline;

      &:not(:disabled):hover {
        color: ${colorPalette[color]?.['600'] || selectedColor};
        text-decoration: none;
      }
    `,
    round: css`
      border: none;
      border-radius: 50px;
      color: white;
      background-color: ${selectedColor};

      &:not(:disabled):hover {
        background-color: ${colorPalette[color]?.['600'] || selectedColor};
      }
    `,
  }[variant]
}

export const getIconStyles = (iconPosition: 'left' | 'right') =>
  iconPosition === 'left'
    ? css`
        margin-right: 0.5rem;
      `
    : css`
        margin-left: 0.5rem;
      `
