import axios,{ AxiosRequestConfig } from 'axios'

const baseURL = process.env.NEXT_PUBLIC_BASE_URL
    , isServer = typeof window === 'undefined'

const api:AxiosRequestConfig = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default api