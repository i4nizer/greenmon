import router from "../router/index";
import { useTokenStore } from "@/store/token";
import axios from "axios";


// Initialize
const api = axios.create({
    baseURL: `http://localhost:4000`,
    withCredentials: true
})


// Add tokens on requests
api.interceptors.request.use(
    
    async (config) => {
        
        const tokenStore = useTokenStore()

        // needs to sign in again
        if (tokenStore.refreshExpired) {
            // cancel the request
            const controller = new AbortController()
            config.signal = controller.signal
            controller.abort()
            
            router.push('/sign-in')
            return Promise.reject(new axios.AxiosError('Security: Token expired, kindly login again.', 'ECONNABORTED'))
        }

        // no access but have refresh
        if (tokenStore.accessExpired) {
            await tokenStore.rotate()
                .catch(err => {
                    // no response
                    if (!err.response) return Promise.reject(new axios.AxiosError('Security: Backend server offline, kindly login again.', 'ECONNABORTED'))

                    // cancel the request
                    const controller = new AbortController()
                    config.signal = controller.signal
                    controller.abort()
                    
                    router.push('/sign-in')
                    return Promise.reject(new axios.AxiosError('Security: Token expired, kindly login again.', 'ECONNABORTED'))
                })
        }

        // add access token in headers
        if (tokenStore.access) config.headers['Authorization'] = `Bearer ${tokenStore.access}`

        return config
    },
)

// Respond to token errors on requests
api.interceptors.response.use(
    async (res) => {

        const tokenStore = useTokenStore()

        if (tokenStore.accessExpired) await tokenStore.rotate()

        return res
    },
    
    // log errors
    async (error) => {
        console.error(error)
        return Promise.reject(error)
    }
)


export default api