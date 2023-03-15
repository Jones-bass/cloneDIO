import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { MdEmail, MdLock } from 'react-icons/md'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { defaultValues, IFormLogin } from '../../@types/loginTypes'

import { useAuth } from '../../hooks/useAuth'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import {
  Container,
  Title,
  Column,
  TitleLogin,
  SubtitleLogin,
  EsqueciText,
  CriarText,
  Row,
  Wrapper,
} from '../../styles/login'

const schema = yup
  .object({
    email: yup
      .string()
      .email('email não é valido')
      .required('Campo Obrigatório'),
    password: yup
      .string()
      .min(8, 'A senha deve ter no mínimo 8 caracteres')
      .required('Campo Obrigatório'),
  })
  .required()

export function Login() {
  const { handleLogin } = useAuth()

  const navigate = useNavigate()
  const handleClickSignIn = () => {
    navigate('/registration')
  }

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    defaultValues,
  })

  const onSubmit = async (formData: IFormLogin) => {
    handleLogin(formData)
  }

  return (
    <>
      <Header />
      <Container>
        <Column flex={2}>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column flex={1}>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="email"
                placeholder="E-mail"
                errorMessage={errors?.email?.message}
                control={control}
                leftIcon={<MdEmail color="#8647AD" />}
              />
              <Input
                name="password"
                placeholder="Senha"
                type="password"
                errorMessage={errors?.password?.message}
                control={control}
                leftIcon={<MdLock color="#8647AD" />}
              />
              <Button
                disabled={isValid}
                title="Entrar"
                variant="secondary"
                type="submit"
              />
            </form>

            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText onClick={handleClickSignIn}>Criar Conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  )
}
