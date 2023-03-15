import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo-dio.png'
import { useAuth } from '../../hooks/useAuth'
import { Button } from '../Button'
import { Dropdown } from '../Dropdown'
import {
  Container,
  Wrapper,
  BuscarInputContainer,
  InputSearch,
  Row,
  Menu,
} from './styles'

export function Header() {
  const { user } = useAuth()

  const navigate = useNavigate()

  const handleSignIn = () => {
    navigate('/login')
  }

  const handleRegistration = () => {
    navigate('/registration')
  }

  return (
    <Wrapper>
      <Container>
        <Row>
          <Link to="/">
            <img src={logo} alt="Logo da dio" />
          </Link>
          {user.id ? (
            <>
              <BuscarInputContainer>
                <InputSearch placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {user.id ? (
            <Dropdown />
          ) : (
            <>
              <Button onClick={handleSignIn} title="Entrar" /> <br />
              <Button onClick={handleRegistration} title="Cadastrar" />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  )
}
