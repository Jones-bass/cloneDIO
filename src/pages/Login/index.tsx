import { useNavigate } from 'react-router-dom'

import { MdEmail, MdLock } from 'react-icons/md'

import Input from '../../components/Input'
import { Button } from '../../components/Button'

import Header from '../../components/Header'

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

export default function Login() {
  const navigate = useNavigate()

  const handleClickSignIn = () => {
    navigate('/feed')
  }

  return (
    <>
      <Header authenticated={true} />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>

            <form>
              <Input placeholder="E-mail" leftIcon={<MdEmail />} />
              <Input placeholder="Senha" leftIcon={<MdLock />} />
              <Button title="Entrar" variant="secondary" onClick={handleClickSignIn}/>
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
