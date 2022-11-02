import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";

import { MdEmail, MdLock } from 'react-icons/md'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

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
import { api } from '../../services/api';

interface IFormInputs {
  email: string
  password: string
  formData: string
}

const schema = yup.object({
  email: yup.string().email('email não é valido').required('Campo Obrigatório'),
  password: yup.string().min(6, 'No minimo 6 caracteres').required('Campo Obrigatório'),
}).required();

export function Login() {
  const navigate = useNavigate()

  const { control, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const onSubmit = async ({ formData }: IFormInputs) => {
    try {
      const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
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
      <Header authenticated={true} />
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
              <Input name="email" errorMessage={errors?.email?.message} control={control} leftIcon={<MdEmail />} />
              <Input name="password" errorMessage={errors?.password?.message} control={control} leftIcon={<MdLock />} />
              <Button title="Entrar" variant="secondary" type="submit" />
            </form>

            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar Conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  )
}
