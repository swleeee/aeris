import { ButtonProps } from './Button.type'

const Button = ({
  children,
  isLoading = false,
  loadingComponent,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      /**
       * NOTE: aria-busy
       *
       * 로딩 중이나 처리 중인 요소를 스크린 리더 사용자에게 알리며
       * 사용자가 해당 요소가 현재 사용 불가능한 상태라는 점을 이해할 수 있도록 도움
       */
      aria-busy={isLoading}
    >
      {isLoading ? loadingComponent || 'Loading...' : children}
    </button>
  )
}

export default Button
