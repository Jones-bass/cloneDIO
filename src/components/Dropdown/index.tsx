import { useState } from 'react'

import { IUser } from '../../@types/userTypes'
import { useAuth } from '../../hooks/useAuth'

import { DropdownContainer, Button, UserPicture } from './styles'

export function Dropdown() {
  const { userLogout } = useAuth()
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  function handleLogoutClick(data: IUser) {
    userLogout(data)
  }

  return (
    <DropdownContainer>
      <Button onClick={handleOpen}>
        <UserPicture
          src="https://avatars.githubusercontent.com/u/85463497?v=4"
          alt=""
        />
      </Button>
      {open ? (
        <ul className="menu">
          <li className="menu-item">
            <button
              onClick={() =>
                handleLogoutClick({
                  name: 'userName',
                  email: 'userEmail',
                  password: 'userPassword',
                })
              }
            >
              Sair
            </button>
          </li>
        </ul>
      ) : null}
    </DropdownContainer>
  )
}
