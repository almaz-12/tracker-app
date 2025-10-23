export const validator = {
  username: (username: string): boolean => {
    return username.length > 6
  },
  email: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  },
  password: (password: string): boolean => {
    return password.length > 6
  },
}
