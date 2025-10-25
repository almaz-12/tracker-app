export interface Auth {
  message: string
  token: string
  user: {
    id: number
    email: string
    username: string
  }
}
