import { ButtonContainer } from './styles'

interface ButtonProps {
  title: string
  variant?: string
  type?: string
  onClick?: () => void
}

export function Button({ title, variant = 'primary', onClick }: ButtonProps) {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
      {title}
    </ButtonContainer>
  )
}
