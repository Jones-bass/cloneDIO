import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo-dio.png'
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

interface AuthenticatedProps {
  authenticated: boolean
}

export function Header({ authenticated }: AuthenticatedProps) {
  const navigate = useNavigate()

  const handleClickSignIn = () => {
    navigate('/login')
  }
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da dio" onClick={handleClickSignIn} />
          {authenticated ? (
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
          {authenticated ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/85463497?v=4" />
          ) : (
            <>
              <Button title="Entrar" />
              <Button title="Cadastrar" />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  )
}
