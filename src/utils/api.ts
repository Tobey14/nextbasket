import axios,{ AxiosRequestConfig } from 'axios'

const baseURL = process.env.NEXT_PUBLIC_BASE_URL
    , isServer = typeof window === 'undefined'

const config = {
    baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
}

const api = axios.create(config);


export default api