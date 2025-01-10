import { defineStore } from "pinia";
import { ref } from "vue";


export const useUserStore = defineStore('user', () => {
    
    // ---state
    const id = ref('')
    const name = ref('')
    const email = ref('')
    const verified = ref(false)
    const role = ref('')
    const createdAt = ref(new Date(Date.now()))
    
    const emailLastResend = ref(0)

    const passwordLastReset = ref(0)
    const passwordLastForgot = ref(0)
    const passwordResetEmail = ref('')


    // ---getters



    // ---actions
    
    

    // ---expose
    return {
        id,
        name,
        email,
        verified,
        role,
        createdAt,
        emailLastResend,
        passwordLastReset,
        passwordLastForgot,
        passwordResetEmail,
    }

}, { persist: true })