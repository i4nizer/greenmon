<template>
    <v-form class="border rounded pa-7 d-flex flex-column" style="width: 350px" v-model="valid" @submit.prevent="postSignUp">
        <h2>Create an account</h2>
        <span class="text-grey">Sign up for your IoT Dashboard account</span>

        <label class="mt-6" for="name">Name</label>
        <v-text-field
            id="name"
            variant="outlined"
            density="compact"
            v-model="name"
            placeholder="Example Name"
            :rules="[rules.required, rules.min3]"
        ></v-text-field>

        <label for="email">Email</label>
        <v-text-field
            id="email"
            variant="outlined"
            density="compact"
            v-model="email"
            placeholder="example@email.com"
            :rules="[rules.required, rules.email]"
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

        <v-btn 
            :disabled="!valid || loading"
            :loading="loading"
            class="text-none"
            color="white" 
            type="submit"
            text="Sign Up"
            variant="elevated"
        ></v-btn>

        <span class="align-self-center mt-6"
            >Already have an account?
            <router-link class="text-decoration-none text-white" to="/sign-in"
                >Sign In</router-link
            ></span
        >
    </v-form>
</template>

<script setup>
import router from '@/router';
import { useUserStore } from '@/store/user';
import rules from '@/utils/rules';
import snackbar from '@/utils/snackbar';
import axios from 'axios';
import { ref } from 'vue';


const userStore = useUserStore()

// states
const valid = ref(false)
const loading = ref(false)

// data
const name = ref('')
const email = ref('')
const password = ref('')


// send api req
const postSignUp = async () => {
    loading.value = true

    // craft data
    const data = {
        name: name.value,
        email: email.value,
        password: password.value,
    }

    // send to backend
    await axios.post('http://localhost:4000/user/sign-up', data)
        .then(res => {
            snackbar.message.value = res.data.text
            userStore.email = email.value
            router.push('/email-confirmation')
        })
        .catch(err => snackbar.message.value = err.message)
        .finally(() => snackbar.show.value = true)

    loading.value = false
}


</script>

<style scoped></style>
