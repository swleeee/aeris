import { BaseButton } from '@aeris/core'

import { getBaseStyles, getIconStyles, getVariantStyles } from './Button.style'
import { ButtonProps } from './Button.type'

const Button = ({
  children,
  variant = 'solid',
  leftIcon,
  rightIcon,
  href,
  color = 'gray',
  disabled = false,
  ...props
}: ButtonProps) => {
  // TODO: font custom 예정
  const baseStyles = getBaseStyles({ fontSize: '1rem', fontWeight: 500 })
  const variantStyles = getVariantStyles({ variant, color })
  const iconStyles =
    leftIcon || rightIcon ? getIconStyles(leftIcon ? 'left' : 'right') : null

  const Content = () => {
    return (
      <>
        {leftIcon && <span css={iconStyles}>{leftIcon}</span>}
        {children}
        {rightIcon && <span css={iconStyles}>{rightIcon}</span>}
      </>
    )
  }

  const ButtonContent = (
    <BaseButton
      css={[baseStyles, variantStyles]}
      disabled={disabled}
      {...props}
    >
      <Content />
    </BaseButton>
  )

  return href ? (
    <a href={href} css={[baseStyles, variantStyles]}>
      <Content />
    </a>
  ) : (
    ButtonContent
  )
}

export default Button
