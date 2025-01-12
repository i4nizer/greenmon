<template>
    <v-card class="border rounded pa-7 d-flex flex-column bg-transparent" style="width: 350px" :disabled="cooldown < buffer" :loading="loading">
        <h2>Check your email</h2>
        <span class="text-grey">We've sent you a reset link</span>

        <span class="w-100 d-flex justify-center my-6"><v-icon size="50">mdi-email-outline</v-icon></span>

        <span class="text-center">We've sent an email to your address. Please click the link in the email to reset your password.</span>
        <span class="text-center text-grey mt-3">If you don't see the email, check your spam folder.</span>

        <v-btn class="text-none mt-3" color="white" variant="elevated" to="/sign-in">Return to Sign In</v-btn>

        <span class="mt-3 text-center">Didn't receive the email?</span>
        <router-link 
            to="" 
            class="text-decoration-none text-white text-center" 
            @click.prevent="postResetEmail"
        >{{ resetLinkText }}</router-link>
    </v-card>
</template>

<script setup>
import { useUserStore } from '@/store/user';
import snackbar from '@/utils/snackbar';
import axios from 'axios';
import { computed, onMounted, ref } from 'vue';

const userStore = useUserStore()

// state
const buffer = 60
const loading = ref(false)
const cooldown = ref(Math.floor((Date.now() - userStore.passwordLastForgot) / 1000))
const resetLinkText = computed(() => cooldown.value < buffer ? `Resend Email in ${Math.floor(buffer - cooldown.value)}s` : 'Resend Email')


// countdown
const countdown = () => {
    const interval = setInterval(() => {
        cooldown.value = Math.floor((Date.now() - userStore.passwordLastForgot) / 1000)
        if (cooldown.value >= buffer) clearInterval(interval)
    }, 1000)
}

// post resend password reset email
const postResetEmail = async () => {
    loading.value = true

    const data = { email: userStore.passwordResetEmail }
    await axios.post('http://localhost:4000/user/resend-forgot-password', data)
        .then(res => {
            // store email
            userStore.passwordLastForgot = Date.now()
            snackbar.message.value = res.data.text
            countdown()
        })
        .catch(err => {
            // specify errors
            if (!err.response) snackbar.message.value = 'Failed to forgot password, backend server offline.'
            else if (err.response.status == 401) snackbar.message.value = 'Failed to forgot password, email not verified yet.'
            else if (err.response.status == 404) snackbar.message.value = 'Failed to forgot password, email not registered.'
            else snackbar.message.value = err.toString()
        })
        .finally(() => snackbar.show.value = true)

    loading.value = false
}


// if there is countdown
onMounted(() => { if (cooldown.value < buffer) countdown() })

</script>

<style scoped></style>
