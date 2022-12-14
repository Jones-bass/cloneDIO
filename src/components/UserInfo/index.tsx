import { Container, NameText, Progress, UserPicture } from './styles'

interface UserProps {
  nome: string
  image?: string
  percentual: number
}

export function UserInfo({ nome, image, percentual }: UserProps) {
  return (
    <Container>
      <UserPicture src={image} />
      <div>
        <NameText>{nome}</NameText>
        <Progress percentual={percentual} />
      </div>
    </Container>
  )
}
