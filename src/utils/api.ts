import axios,{ AxiosRequestConfig, AxiosResponse} from 'axios'

const baseURL = process.env.NEXT_PUBLIC_BASE_URL
    , isServer = typeof window === 'undefined'

const config:AxiosRequestConfig = {
    baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
}

const api:AxiosResponse = axios.create(config);


export default api