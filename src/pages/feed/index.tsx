import Card from '../../components/Card'
import { UserInfo } from '../../components/UserInfo'
import { Container, Column, Title, TitleHighlight } from '../../styles/feed'

export default function Feed() {
  return (
    <Container>
      <Column flex={3}>
        <Title>Feed</Title>
        <Card />
        <Card />
        <Card />
      </Column>
      <Column flex={1}>
        <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
        <UserInfo
          nome="Jones Bass"
          image="https://avatars.githubusercontent.com/u/85463497?v=4"
          percentual={85}
        />
        <UserInfo
          nome="Jones Souza"
          image="https://avatars.githubusercontent.com/u/85463497?v=4"
          percentual={75}
        />
        <UserInfo
          nome="Jones Silva"
          image="https://avatars.githubusercontent.com/u/85463497?v=4"
          percentual={65}
        />
        <UserInfo
          nome="Silva Jones"
          image="https://avatars.githubusercontent.com/u/85463497?v=4"
          percentual={55}
        />
        <UserInfo
          nome="Bass Silva"
          image="https://avatars.githubusercontent.com/u/85463497?v=4"
          percentual={45}
        />
      </Column>
    </Container>
  )
}
