import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { MdEmail, MdLock } from 'react-icons/md'
import { FaUser } from 'react-icons/fa'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'

import { defaultValues, IFormLogin } from '../../@types/loginTypes'

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
import { useAuth } from '../../hooks/useAuth'

const schema = yup
  .object({
    name: yup
      .string()
      .max(40, 'nome não invalido')
      .required('Campo Obrigatório'),
    email: yup
      .string()
      .email('email não é valido')
      .required('Campo Obrigatório'),
    password: yup
      .string()
      .min(8, 'A senha deve ter no mínimo 8 caracteres')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        'A senha deve ter pelo menos uma letra e um número',
      )
      .required('Campo Obrigatório'),
  })
  .required()
/* password: z
      .string()
      .min(8, { message: 'A senha deve ter pelo menos 8 caracteres.' })
      .regex(/[A-Z]/, {
        message: 'A senha deve ter pelo menos uma letra maiúscula.',
      })
      .regex(/[a-z]/, {
        message: 'A senha deve ter pelo menos uma letra minúscula.',
      })
      .regex(/[0-9]/, { message: 'A senha deve ter pelo menos um número.' })
      .regex(/[^A-Za-z0-9]/, {
        message: 'A senha deve ter pelo menos um caractere especial.',
      */

export function Registration() {
  const { handleCreateUser } = useAuth()

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

  async function handleCreateNew(data: IFormLogin) {
    handleCreateUser(data)
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

            <form onSubmit={handleSubmit(handleCreateNew)}>
              <Input
                name="name"
                placeholder="Nome completo"
                errorMessage={errors?.name?.message}
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
                placeholder="senha"
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
