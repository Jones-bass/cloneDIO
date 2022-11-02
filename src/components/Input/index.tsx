import { Controller } from 'react-hook-form'
import { InputContainer, InputText, IconContainer, ErrosText } from './styles'

interface InputProps {
  name: string
  leftIcon?: React.ReactNode
  control: any
  errorMessage?: string
}

export function Input({ leftIcon, name, errorMessage, control, ...rest }: InputProps) {
  return (
      <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputText {...field} {...rest} />}
        />
        {errorMessage ? <ErrosText>{errorMessage}</ErrosText> : null}
      </InputContainer>
  )
}
