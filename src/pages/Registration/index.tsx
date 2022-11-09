import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { MdEmail, MdLock } from 'react-icons/md'
import { FaUser } from 'react-icons/fa'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'

import { api } from '../../services/api'
import { IFormLogin, defaultValues } from '../../components/Input/types'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import {
  Container,
  Title,
  Column,
  TitleRegistration,
  SubtitleRegistration,
  ContaText,
  TitleConta,
  Row,
  Wrapper,
} from '../../styles/registration'

const schema = yup
  .object({
    nome: yup
      .string()
      .max(40, 'nome não invalido')
      .required('Campo Obrigatório'),
    email: yup
      .string()
      .email('email não é valido')
      .required('Campo Obrigatório'),
    password: yup
      .string()
      .min(6, 'No minimo 6 caracteres')
      .required('Campo Obrigatório'),
  })
  .required()

export function Registration() {
  const navigate = useNavigate()

  const handleSignIn = () => {
    navigate('/login')
  }

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues,
  })

  const onSubmit = async (formData: IFormLogin) => {
    try {
      const { data } = await api.get(
        `users?email=${formData.email}&senha=${formData.password}`,
      )
      if (data.length === 1) {
        navigate('/feed')
      } else {
        alert('Email ou senha inválido')
      }
    } catch {
      alert('Tente novamente!')
    }
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
            <TitleRegistration>Comece agora grátis</TitleRegistration>
            <SubtitleRegistration>
              Crie sua conta e make the change._
            </SubtitleRegistration>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="nome"
                placeholder="Nome completo"
                errorMessage={errors?.nome?.message}
                control={control}
                leftIcon={<FaUser color="#8647AD" />}
              />
              <Input
                name="email"
                placeholder="E-mail"
                errorMessage={errors?.email?.message}
                control={control}
                leftIcon={<MdEmail color="#8647AD" />}
              />
              <Input
                name="password"
                placeholder="Password"
                type="password"
                errorMessage={errors?.password?.message}
                control={control}
                leftIcon={<MdLock color="#8647AD" />}
              />
              <Button
                disabled={!isValid}
                title="Criar minha conta"
                variant="secondary"
                type="submit"
              />
            </form>

            <TitleConta>
              Ao clicar em <strong>criar minha conta grátis</strong>, declaro
              que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
            </TitleConta>
            <Row>
              <ContaText>
                Já tenho conta.{' '}
                <strong onClick={handleSignIn}>Fazer login</strong>
              </ContaText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  )
}
