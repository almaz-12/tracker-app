import { API_BASE } from '@/common/constants'
import axios from 'axios'

const api = axios.create({
  baseURL: API_BASE,
})

export default api
