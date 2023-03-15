import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {
  IAuthContext,
  IAuthContextProviderProps,
  ICreateUser,
  ILoginData,
} from '../@types/contextTypes'
import { IUser } from '../@types/userTypes'
import { api } from '../services/api'

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthContextProvider = ({
  children,
}: IAuthContextProviderProps) => {
  const [login, setLogin] = useState(null)
  const [user, setUser] = useState<IUser>({} as IUser)

  const navigate = useNavigate()

  const handleLogin = async (loginData: ILoginData) => {
    try {
      const { data } = await api.get(
        `users?email=${loginData.email}&password=${loginData.password}`,
      )
      if (data.length === 1) {
        setUser(data[0])
        navigate('/feed')
      } else {
        alert('Email ou senha inválido')
      }
    } catch {
      alert('Tente novamente!')
    }
  }

  const userLogout = async () => {
    setLogin(null)
    setUser({} as IUser)
    navigate('/')
  }

  const handleCreateUser = async (data: ICreateUser) => {
    const { name, email, password } = data

    await api.post('users', {
      name,
      email,
      password,
    })
    navigate('/login')
    if (data !== undefined) {
      toast.success('Usuário Cadastrado.')
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, handleLogin, userLogout, handleCreateUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}
