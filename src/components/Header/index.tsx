import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo-dio.png'
import { AuthContext } from '../../context/auth'
import { Button } from '../Button'
import {
  Container,
  Wrapper,
  BuscarInputContainer,
  Input,
  Row,
  Menu,
  UserPicture,
} from './styles'

export function Header() {
  const { user } = useContext(AuthContext)

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
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {user.id ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/85463497?v=4" />
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
