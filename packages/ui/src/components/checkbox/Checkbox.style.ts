import { css } from '@emotion/react'

import { colorPalette } from '../../styles/colors'
import { CheckboxProps } from './Checkbox.type'

const getCheckboxSize = (size: CheckboxProps['size']) => {
  switch (size) {
    case 'sm':
      return '16px'
    case 'md':
      return '20px'
    case 'lg':
      return '24px'
    default:
      return '20px'
  }
}

const getBorderRadius = (radius: CheckboxProps['borderRadius']) => {
  switch (radius) {
    case 'none':
      return '0px'
    case 'sm':
      return '2px'
    case 'md':
      return '4px'
    case 'lg':
      return '8px'
    case 'full':
      return '9999px'
    default:
      return '4px'
  }
}

export const getCheckboxWrapperStyles = (size: CheckboxProps['size']) => css`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${getCheckboxSize(size)};
  height: ${getCheckboxSize(size)};
`

type CheckboxStyleType = Pick<
  CheckboxProps,
  'color' | 'size' | 'disabled' | 'borderRadius'
> & { hasCustomIcon: boolean }

export const getCheckboxStyles = ({
  hasCustomIcon,
  color,
  size,
  disabled,
  borderRadius,
}: CheckboxStyleType) => css`
  display: inline-block;
  width: ${getCheckboxSize(size)};
  height: ${getCheckboxSize(size)};
  ${!hasCustomIcon &&
  `
  border: 2px solid ${colorPalette.gray[500]};
  border-radius: ${getBorderRadius(borderRadius)};
  `}
  appearance: none;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;
  cursor: ${disabled ? 'not-allowed' : 'pointer'};

  &:hover {
    border-color: ${hasCustomIcon ? 'transparent' : colorPalette[color][500]};
  }

  &:checked {
    background-color: ${hasCustomIcon
      ? 'transparent'
      : colorPalette[color][500]};
    border-color: ${hasCustomIcon ? 'transparent' : colorPalette[color][500]};
  }

  &:checked + span {
    display: flex;
  }

  &:disabled {
    border-color: ${colorPalette.gray[400]};
    cursor: not-allowed;

    &:checked {
      background-color: ${hasCustomIcon
        ? 'transparent'
        : colorPalette.gray[400]};
    }
  }
`

export const getLabelStyles = (size: CheckboxProps['size']) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${size === 'sm' ? '0.25rem' : '0.5rem'};
  width: fit-content;
  font-size: ${size === 'sm'
    ? '0.875rem'
    : size === 'lg'
      ? '1.125rem'
      : '1rem'};
`

export const getCheckmarkIconStyles = (size: CheckboxProps['size']) => css`
  position: absolute;
  display: none;
  font-size: ${size === 'sm' ? '12px' : size === 'lg' ? '18px' : '16px'};
  color: ${colorPalette.white};
  pointer-events: none;

  input:checked + &,
  input:indeterminate + & {
    display: flex;
  }
`

export const getCustomIconStyles = (size: CheckboxProps['size']) => css`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${size === 'sm' ? '12px' : size === 'lg' ? '18px' : '16px'};
  pointer-events: none;
`
