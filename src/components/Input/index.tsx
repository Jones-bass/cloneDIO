/* eslint-disable no-undef */
import { Controller, Control } from 'react-hook-form'
import { InputContainer, InputText, IconContainer, ErrosText } from './styles'
import { IFormLogin } from './types'

interface InputProps {
  name: 'name' | 'email' | 'senha'
  leftIcon?: React.ReactNode
  control: Control<IFormLogin, any>
  placeholder: string
  type?: string
  errorMessage?: string
}

export function Input({
  leftIcon,
  name,
  errorMessage,
  control,
  ...rest
}: InputProps) {
  return (
    <>
      <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <InputText
              {...rest}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              ref={ref}
            />
          )}
        />
      </InputContainer>
      {errorMessage ? <ErrosText>{errorMessage}</ErrosText> : null}
    </>
  )
}
