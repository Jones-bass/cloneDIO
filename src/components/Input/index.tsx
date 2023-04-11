import React, { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'
import { InputContainer, InputText, IconContainer, ErrosText } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  errorMessage: string
  leftIcon?: React.ReactNode
}

export function Input(props: InputProps) {
  const { register } = useFormContext()
  return (
    <>
      <InputContainer>
        {props.leftIcon ? (
          <IconContainer>{props.leftIcon}</IconContainer>
        ) : null}
        <InputText id={props.name} {...register(props.name)} {...props} />
      </InputContainer>
      {props.errorMessage ? <ErrosText>{props.errorMessage}</ErrosText> : null}
    </>
  )
}
