<template>
    <v-form class="border rounded pa-7 d-flex flex-column" style="width: 350px" v-model="valid" @submit.prevent="postResetPassword">
        <h2>Reset Password</h2>
        <span class="text-grey">Enter your new password below</span>

        <label class="mt-6" for="new-password">New Password</label>
        <v-text-field
            id="new-password"
            variant="outlined"
            density="compact"
            type="password"
            v-model="newPassword"
            :rules="[rules.required, rules.min8]"
        ></v-text-field>

        <label for="confirm-password">Confirm Password</label>
        <v-text-field
            id="confirm-password"
            variant="outlined"
            density="compact"
            type="password"
            v-model="confirmPassword"
            :rules="[rules.required, rules.min8, sameRule]"
        ></v-text-field>

        <v-btn :loading="loading" class="text-none" color="white" type="submit" variant="elevated">Reset Password</v-btn>
    </v-form>
</template>

<script setup>
import router from '@/router';
import { useUserStore } from '@/store/user';
import rules from '@/utils/rules';
import snackbar from '@/utils/snackbar';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';


const userStore = useUserStore()

// check token
const route = useRoute()
const token = route.params.token

// state
const valid = ref(false)
const loading = ref(false)

// data
const newPassword = ref('')
const confirmPassword = ref('')
const sameRule = v => v === newPassword.value || 'Must be the same with new password.'

// post new password
const postResetPassword = async () => {
    loading.value = true

    const data = { passwordToken: token, password: newPassword.value }
    await axios.post('http://localhost:4000/user/reset-password', data)
        .then(res => {
            // save reset
            userStore.passwordLastReset = Date.now()
            snackbar.message.value = 'Password reset successfully.'
            router.push('/sign-in')
        })
        .catch(err => {
            // specify errors
            if (!err.response) snackbar.message.value = 'Failed to reset password, backend server offline.'
            else if (err.response.status == 400) snackbar.message.value = 'Failed to reset password, new password cannot be the old password.'
            else if (err.response.status == 401) snackbar.message.value = 'Failed to reset password, email not verified yet.'
            else if (err.response.status == 404) snackbar.message.value = 'Failed to reset password, email not registered.'
            else snackbar.message.value = err.toString()
        })
        .finally(() => snackbar.show.value = true)

    loading.value = false
}


// check password token
onMounted(() => { if (!token) router.push('/sign-in') })


</script>

<style scoped></style>
