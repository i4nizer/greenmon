<template>
    <v-form class="border rounded pa-7 d-flex flex-column" style="width: 350px" v-model="valid" @submit.prevent="postForgotPassword">
        <h2>Forgot Password</h2>
        <span class="text-grey">Enter email to reset your password</span>

        <label class="mt-6" for="email">Email</label>
        <v-text-field
            id="email"
            variant="outlined"
            density="compact"
            v-model="email"
            :rules="[rules.required, rules.email]"
            placeholder="example@email.com"
        ></v-text-field>

        <v-btn
            style="text-transform: none"
            color="white"
            type="submit"
            variant="elevated"
            :disabled="!valid || loading"
            :loading="loading"
            >Reset Password</v-btn
        >

        <span class="align-self-center mt-6"
            >Remember your password?
            <router-link class="text-decoration-none text-white" to="/sign-in"
                >Sign In</router-link
            ></span
        >
    </v-form>
</template>

<script setup>
import router from '@/router';
import { useUserStore } from '@/store/user';
import api from '@/utils/api';
import rules from '@/utils/rules';
import snackbar from '@/utils/snackbar';
import { ref } from 'vue';


// state
const valid = ref(false)
const loading = ref(false)

// data
const email = ref('')
const userStore = useUserStore()

// post and store email then redirect
const postForgotPassword = async () => { 
    loading.value = true

    await api.post('/user/forgot-password', { email: email.value })
        .then(res => {
            // store email
            userStore.passwordResetEmail = email.value
            snackbar.message.value = res.data.text

            router.push('/password-confirmation')
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



</script>

<style scoped></style>
