export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  loadingComponent?: React.ReactNode
  children: React.ReactNode
}
