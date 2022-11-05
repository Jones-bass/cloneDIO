import { Controller } from 'react-hook-form'
import { InputContainer, InputText, IconContainer, ErrosText } from './styles'

interface InputProps {
  name: string
  leftIcon?: React.ReactNode
  control: any
  errorMessage?: string
  placeholder?: string
}

export function Input({
  leftIcon,
  name,
  errorMessage,
  placeholder,
  control,
  ...rest
}: InputProps) {
  return (
    <>
      <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field: { value, onChange } }) => (
            <InputText
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              {...rest}
            />
          )}
        />
      </InputContainer>

      {errorMessage ? <ErrosText>{errorMessage}</ErrosText> : null}
    </>
  )
}
