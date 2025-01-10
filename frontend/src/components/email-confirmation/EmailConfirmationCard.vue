<template>
    <v-card :loading="loading" :disabled="loading || cooldown < buffer" class="border rounded pa-7 d-flex flex-column bg-transparent" style="width: 350px">
        <h2>Check your email</h2>
        <span class="text-grey">We've sent you a confirmation link</span>

        <span class="w-100 d-flex justify-center my-6"><v-icon size="50">mdi-email-outline</v-icon></span>

        <span class="text-center">We've sent an email to your address. Please click the link in the email to confirm your account.</span>
        <span class="text-center text-grey mt-3">If you don't see the email, check your spam folder.</span>
        <span class="text-center mt-3">You won't be able to sign in until you've verified your email address.</span>

        <v-btn class="text-none mt-3" color="white"     variant="elevated" to="/sign-in">Return to Sign In</v-btn>

        <span class="mt-3 text-center">Didn't receive the email?</span>
        <router-link 
            to="" 
            class="text-decoration-none text-white text-center" 
            @click.prevent="postResendEmail"
        >{{ resendLinkText }}</router-link>
    </v-card>
</template>

<script setup>
import router from '@/router';
import { useUserStore } from '@/store/user';
import api from '@/utils/api';
import snackbar from '@/utils/snackbar';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';


const userStore = useUserStore()

// access the token provided
const route = useRoute()
const token = route.params?.token

// state
const buffer = 60
const cooldown = ref(Math.floor((Date.now() - userStore.emailLastResend) / 1000))
const loading = ref(false)
const resendLinkText = computed(() => cooldown.value < buffer ? `Resend Email in ${Math.floor(buffer - cooldown.value)}s` : 'Resend Email')

// countdown
const countdown = () => {
    const interval = setInterval(() => {
        cooldown.value = Math.floor((Date.now() - userStore.emailLastResend) / 1000)
        if (cooldown.value >= buffer) clearInterval(interval)
    }, 1000)
}

// post resend confirmation emal
const postResendEmail = async () => {
    loading.value = true

    await api.post('/user/resend-email-confirmation', { email: userStore.email })
        .then(res => {
            // store resend
            userStore.emailLastResend = Date.now()
            snackbar.message.value = 'Email sent successfully, please check your inbox.'
            countdown()
        })
        .catch(err => {
            // specify errors
            if (!err.response) snackbar.message.value = 'Failed to resend email, backend server offline.'
            else if (err.response.status == 404) snackbar.message.value = 'Failed to resend email, email unrecognized.'
            else snackbar.message.value = err.toString()
        })
        .finally(() => snackbar.show.value = true)

    loading.value = false
}

// post emailToken
const postEmailToken = async () => {
    loading.value = true

    await api.post('/user/email-confirmation', { emailToken: token })
        .then(res => snackbar.message.value = 'Email confirmed successfully, you can sign in now.')
        .then(() => router.push('/sign-in'))
        .catch(err => snackbar.message.value = err.toString())
        .finally(() => snackbar.show.value = true)

    loading.value = false
}


// check if there is token
onMounted(async () => {
    if (token) await postEmailToken()
    if (cooldown.value < buffer) countdown()
})


</script>

<style scoped></style>
