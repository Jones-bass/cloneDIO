export interface IFormLogin {
  email: string
  password: string
  name: string
  senha: string
  nome: string
}

export const defaultValues: IFormLogin = {
  email: '',
  password: '',
  nome: '',
  name: '',
  senha: '',
}
