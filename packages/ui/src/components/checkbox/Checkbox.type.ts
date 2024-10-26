import { CheckboxProps as BaseCheckboxProps } from '@aeris/core' // BaseCheckboxProps 가져오기
import { ReactNode } from 'react'
import { colorPalette } from '../../styles'

type CheckboxSize = 'sm' | 'md' | 'lg'
type CheckboxColor = keyof typeof colorPalette // colorPalette에 정의된 색상 키 활용
type CheckboxBorderRadius = 'none' | 'sm' | 'md' | 'lg' | 'full' // 다양한 border-radius

// NOTE: icon과 checkedIcon 둘 다 있거나 둘 다 없도록 강제하는 타입 설정
type IconProps =
  | { icon: React.ReactNode; checkedIcon: React.ReactNode }
  | { icon?: undefined; checkedIcon?: undefined }

export type CheckboxProps = Omit<BaseCheckboxProps, 'size' | 'color'> &
  IconProps & {
    size?: CheckboxSize
    color?: CheckboxColor
    label?: string
    borderRadius?: CheckboxBorderRadius
    indeterminate?: boolean // 불확정 상태 여부
    indeterminateIcon?: ReactNode // 불확정 상태일 때 보여줄 아이콘
  }
