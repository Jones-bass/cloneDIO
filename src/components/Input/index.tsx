import { InputContainer, InputText, IconContainer } from './styles'

interface InputProps {
  name: string
  leftIcon?: any
}

export default function Input({ leftIcon, name, ...rest }: InputProps) {
  return (
    <InputContainer>
      {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
      <InputText {...rest} />
    </InputContainer>
  )
}
