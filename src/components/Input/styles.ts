import styled from 'styled-components'

export const InputContainer = styled.div`
  width: 100%;
  max-width: 275px;
  height: 30px;
  border-bottom: 1px solid #8647ad;

  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

export const IconContainer = styled.div`
  margin-right: 10px;
`

export const InputText = styled.input`
  background-color: transparent;
  color: #ffffff;
  flex: 1;
  border: 0;
  height: 30px;

  :focus {
    outline: 0;
  }
`

export const ErrosText = styled.p`
  color: #ff0000;
  font-size: 12px;
  padding-bottom: 5px;
`
