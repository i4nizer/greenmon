import router from "@/router";
import { jwtDecode } from "jwt-decode"
import snackbar from "@/utils/snackbar";
import axios from "axios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";


export const useTokenStore = defineStore('token', () => {
    
    // ---state
    const access = ref('')
    const refresh = ref('')



    // ---getters
    const accessExpired = computed(() => access.value == '' || Date.now() > (jwtDecode(access.value).exp * 1000))
    const refreshExpired = computed(() => refresh.value == '' || Date.now() > (jwtDecode(refresh.value).exp * 1000))


    // ---actions
    const rotate = async () => {
        // send refresh token to get new tokens
        const res = await axios.post('http://localhost:4000/user/token', { refreshToken: refresh.value })
        
        // save new tokens
        if (res.status < 300 && res.data) {
            access.value = res.data.object.accessToken
            refresh.value = res.data.object.refreshToken
        }
        
        return res
    }

    



    

    // ---expose
    return {
        access,
        refresh,
        accessExpired,
        refreshExpired,
        rotate,
    }

}, { persist: true })