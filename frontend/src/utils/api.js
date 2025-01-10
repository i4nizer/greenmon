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
        
        // check if needs rotation
        if (!tokenStore.access && tokenStore.refresh) {
            const rotated = await tokenStore.rotate()
            
            // rotation fail, could be expired refresh token
            if (!rotated) {
                // cancel the request
                const controller = new AbortController()
                config.signal = controller.signal
                controller.abort()
                
                return Promise.reject(new axios.AxiosError('Security: Token expired, kindly login again.', 'ECONNABORTED'))
            }
        }
        
        // add access token in headers
        if (tokenStore.access) config.headers['Authorization'] = `Bearer ${tokenStore.access}`

        return config
    },
)

// Respond to token errors on requests
api.interceptors.response.use(
    (res) => res,
    
    // log errors
    async (error) => {

        

        return Promise.reject(error)
    }
)


export default api