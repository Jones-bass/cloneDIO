import React from 'react'
import { IUser } from './userTypes'

export interface IAuthContext {
  user: IUser
  // eslint-disable-next-line no-use-before-define
  handleLogin: (loginData: ILoginData) => Promise<void>
}

export interface IAuthContextProviderProps {
  children: React.ReactNode
}

export interface ILoginData {
  email: string
  password: string
}
