<template>
    <v-form class="border rounded pa-7 d-flex flex-column" style="width: 350px" @submit.prevent="postSignIn" v-model="valid">
        <h2>Sign in to your account</h2>
        <span class="text-grey">Enter your credentials to access your IoT Dashboard</span>

        <label class="mt-6" for="email">Email</label>
        <v-text-field
            id="email"
            variant="outlined"
            density="compact"
            v-model="email"
            :rules="[rules.required, rules.email]"
            placeholder="example@email.com"
        ></v-text-field>

        <label for="password">Password</label>
        <v-text-field
            id="password"
            variant="outlined"
            density="compact"
            type="password"
            v-model="password"
            :rules="[rules.required, rules.min8]"
        ></v-text-field>

        <v-btn :disabled="!valid" :loading="loading" class="text-none" color="white" type="submit" variant="elevated">Sign In</v-btn>

        <span class="align-self-center mt-6"
            >Don't have an account?
            <router-link class="text-decoration-none text-white" to="/sign-up"
                >Sign Up</router-link
            ></span
        >
        <router-link
            class="align-self-center text-decoration-none text-grey mt-1"
            to="/forgot-password"
            >Forgot your password?</router-link
        >
    </v-form>
</template>

<script setup>
import router from '@/router';
import { useTokenStore } from '@/store/token';
import api from '@/utils/api';
import rules from '@/utils/rules';
import snackbar from '@/utils/snackbar';
import { ref } from 'vue';


// stores
const tokenStore = useTokenStore()

// data
const email = ref('')
const password = ref('')

// states
const valid = ref(false)
const loading = ref(false)


// funcs
const postSignIn = async () => {
    loading.value = true

    const data = {
        email: email.value,
        password: password.value
    }

    await api.post('/user/sign-in', data)
        .then((res) => {
            // authenticate
            router.push('/greenhouses')
            snackbar.message.value = 'User signed in successfully.'

            // store tokens
            tokenStore.access = res.data.object.accessToken
            tokenStore.refresh = res.data.object.refreshToken
        })
        .catch((err) => {
            // display specific error
            console.log(err)
            if (!err.response) snackbar.message.value = 'Backend server is offline.'
            else if (err.response.status == 401) snackbar.message.value = 'Email is not yet verified.'
            else if (err.response.status == 403) snackbar.message.value = 'Incorrect password.'
            else if (err.response.status == 404) snackbar.message.value = 'Email is not recognized.'
            else snackbar.message.value = err.response.data.text
        })
        .finally(() => snackbar.show.value = true)
    
    loading.value = false
}



</script>

<style scoped></style>
