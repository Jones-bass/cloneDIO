import { ButtonContainer } from './styles'

interface ButtonProps {
  title: string
  variant?: string
  type?: string
  disabled?: boolean
  onClick?: () => void
}

export function Button({
  disabled,
  title,
  variant = 'primary',
  onClick,
}: ButtonProps) {
  return (
    <ButtonContainer disabled={disabled} variant={variant} onClick={onClick}>
      {title}
    </ButtonContainer>
  )
}
