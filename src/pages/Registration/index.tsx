import { useNavigate } from 'react-router-dom'
import { useForm, FormProvider } from 'react-hook-form'

import { MdEmail, MdLock } from 'react-icons/md'
import { FaUser } from 'react-icons/fa'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

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

const createUserSchema = z.object({
  name: z
    .string()
    .nonempty({
      message: 'O nome é obrigatório',
    })
    .transform((name) => {
      return name
        .trim()
        .split(' ')
        .map((word) => word[0].toLocaleUpperCase().concat(word.substring(1)))
        .join(' ')
    }),
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
    }),
})

type CreateUserData = z.infer<typeof createUserSchema>

export function Registration() {
  const { handleCreateUser } = useAuth()

  const navigate = useNavigate()

  const handleSignIn = () => {
    navigate('/login')
  }

  const createUserForm = useForm<CreateUserData>({
    resolver: zodResolver(createUserSchema),
  })

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = createUserForm

  async function handleCreateNew(data: CreateUserData) {
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
            <FormProvider {...createUserForm}>
              <form onSubmit={handleSubmit(handleCreateNew)}>
                <Input
                  name="name"
                  placeholder="Nome completo"
                  errorMessage={errors?.name?.message ?? ''}
                  leftIcon={<FaUser color="#8647AD" />}
                />
                <Input
                  name="email"
                  placeholder="E-mail"
                  errorMessage={errors?.email?.message ?? ''}
                  leftIcon={<MdEmail color="#8647AD" />}
                />
                <Input
                  name="password"
                  placeholder="senha"
                  type="password"
                  errorMessage={errors?.password?.message ?? ''}
                  leftIcon={<MdLock color="#8647AD" />}
                />
                <Button
                  disabled={isSubmitting}
                  title="Criar minha conta"
                  variant="secondary"
                  type="submit"
                />
              </form>
            </FormProvider>

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
