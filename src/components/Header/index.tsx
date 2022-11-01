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
} from './styles'

const Header = () => {
  const navigate = useNavigate()

  const handleClickSignIn = () => {
    navigate('/')
  }
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da dio" onClick={handleClickSignIn} />
          <BuscarInputContainer>
            <Input placeholder="Buscar..." />
          </BuscarInputContainer>
          <Menu>Live Code</Menu>
          <Menu>Global</Menu>
        </Row>
        <Row>
          <Button title="Entrar" />
          <Button title="Cadastrar" />
        </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }
