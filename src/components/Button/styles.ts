import styled, { css } from 'styled-components'

interface ButtonProps {
  variant: string
}

export const ButtonContainer = styled.button<ButtonProps>`
  background: #565656;
  border-radius: 20px;
  border: none;
  position: relative;

  color: #ffffff;
  padding: 6px 12px;
  min-width: 120px;
  width: 100%;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  ${({ variant }) =>
    variant !== 'primary' &&
    css`
      min-width: 167px;
      height: 33px;

      background: #e4105d;

      &::after {
        content: '';
        position: absolute;
        border: 1px solid #e4105d;
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 22px;
      }

      &:hover {
        opacity: 0.8;
        cursor: pointer;
      }

      &:disabled {
        opacity: 0.7;
        cursor: no-drop;
      }
    `}
`
