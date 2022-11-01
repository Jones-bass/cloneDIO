
import { ButtonContainer } from './styles';

interface ButtonProps {
  title: string
  variant?: string
  onClick?: () => void
}

const Button = ({ title, variant = "primary", onClick }: ButtonProps) => {
  return (
    <ButtonContainer
      variant={variant}
      onClick={onClick}
        >{title} 
    </ButtonContainer>
  )
}

export { Button }
