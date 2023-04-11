import { useNavigate } from 'react-router-dom'
import { useForm, FormProvider } from 'react-hook-form'
import { MdEmail, MdLock } from 'react-icons/md'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'

import { useAuth } from '../../hooks/useAuth'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../../components/Input'

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

const createUserSchema = z.object({
  email: z
    .string()
    .nonempty({
      message: 'O e-mail é obrigatório',
    })
    .email({
      message: 'Formato de e-mail inválido',
    })
    .toLowerCase(),
  password: z
    .string()
    .nonempty({
      message: 'A senha é obrigatória',
    })
    .min(8, {
      message: 'A senha precisa ter no mínimo 8 caracteres',
    }),
})

type CreateUserData = z.infer<typeof createUserSchema>

export function Login() {
  const { handleLogin } = useAuth()

  const navigate = useNavigate()
  const handleClickSignIn = () => {
    navigate('/registration')
  }

  const createUserForm = useForm<CreateUserData>({
    resolver: zodResolver(createUserSchema),
  })

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = createUserForm

  const onSubmit = async (formData: CreateUserData) => {
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

            <FormProvider {...createUserForm}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  name="email"
                  placeholder="E-mail"
                  errorMessage={errors?.email?.message ?? ''}
                  leftIcon={<MdEmail color="#8647AD" />}
                />
                <Input
                  name="password"
                  placeholder="Senha"
                  type="password"
                  errorMessage={errors?.password?.message ?? ''}
                  leftIcon={<MdLock color="#8647AD" />}
                />
                <Button
                  disabled={isSubmitting}
                  title="Entrar"
                  variant="secondary"
                  type="submit"
                />
              </form>
            </FormProvider>

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
