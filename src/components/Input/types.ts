export interface IFormLogin {
  email: string
  password: string
  nome: string
}

export const defaultValues: IFormLogin = {
  nome: '',
  email: '',
  password: '',
}
