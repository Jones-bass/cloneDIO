import Card from '../../components/Card'
import { Container, Column, Title, TitleHighlight } from '../../styles/feed'

export default function Feed() {
  return (
    <Container>
      <Column>
        <Title>Feed</Title>
        <Card />
        <Card />
      </Column>
      <Column>
        <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
      </Column>
    </Container>
  )
}
