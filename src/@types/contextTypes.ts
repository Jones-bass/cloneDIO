/* eslint-disable no-use-before-define */
import React from 'react'
import { IUser } from './userTypes'

export interface IAuthContext {
  user: IUser

  handleLogin: (loginData: ILoginData) => Promise<void>
  handleCreateUser: (data: ICreateUser) => Promise<void>
}

export interface IAuthContextProviderProps {
  children: React.ReactNode
}

export interface ILoginData {
  email: string
  password: string
}

export interface ICreateUser {
  name: string
  email: string
  password: string
}
