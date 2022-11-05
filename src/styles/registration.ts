import styled from 'styled-components'

interface FlexProps {
  flex: number
}

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 100px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Wrapper = styled.div`
  max-width: 330px;
`

export const Column = styled.div<FlexProps>`
  flex: ${({ flex }) => flex};
  padding-right: 24px;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`

export const Title = styled.h2`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  max-width: 90%;
  margin-bottom: 20px;
  line-height: 44px;

  color: #ffffff;
`

export const TitleRegistration = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  margin-bottom: 8px;
`

export const SubtitleRegistration = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 35px;
`

export const ContaText = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;

  strong {
    color: #23dd7a;
  }
`

export const TitleConta = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  margin-top: 35px;
`
