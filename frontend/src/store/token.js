import router from "@/router";
import { jwtDecode } from "jwt-decode"
import snackbar from "@/utils/snackbar";
import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";


export const useTokenStore = defineStore('token', () => {
    
    // ---state
    const access = ref('')
    const refresh = ref('')



    // ---getters



    // ---actions
    /** @returns true if rotated else false */
    const rotate = async () => {
        let success = false
        if (!refresh.value) return false
        
        // send refresh token to get new tokens
        await axios.post('http://localhost:4000/user/token', { refreshToken: refresh.value })
            .then((res) => {
                // save new tokens
                access.value = res.data.object.accessToken
                refresh.value = res.data.object.refreshToken
                
                // display
                success = true
                snackbar.message.value = 'Security: Token rotated successfully.'
            })
            .catch((err) => {
                // specify errors
                if (!err.response) snackbar.message.value = 'Security: Backend server offline, kindly login again.'
                else if (err.response.status == 400) snackbar.message.value = 'Security: Token invalid or expired, kindly login again.'
                else if (err.response.status == 401) snackbar.message.value = 'Security: Cannot perform token rotation, user email unverified.'
                else if (err.response.status == 404) snackbar.message.value = 'Security: Token unrecognized, kindly login again.'
                else snackbar.message.value = err.response.data.text

                // set
                success = false
            })
            .finally(() => snackbar.show.value = true)
        
        return success
    }

    



    

    // ---expose
    return {
        access,
        refresh,
        rotate,
    }

}, { persist: true })