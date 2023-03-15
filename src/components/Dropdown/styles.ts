import styled from 'styled-components'

export const DropdownContainer = styled.div`
  position: relative;

  .menu {
    position: absolute;

    list-style-type: none;
    padding: 0;

    width: 150px;
  }

  .menu > li {
    margin: 0;

    background-color: white;
    color: black;
  }

  .menu > li:hover {
    background-color: lightgray;
  }

  .menu > li > button {
    width: 100%;
    height: 100%;
    text-align: left;

    background: none;
    color: inherit;
    border: none;
    padding: 5px;

    margin: 0;
    font: inherit;
    cursor: pointer;
  }
`

export const Button = styled.div`
  background-color: transparent;

  :hover {
    background-color: transparent;
  }
`

export const UserPicture = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 22px;
  border: 3px solid #ffffff;
`
