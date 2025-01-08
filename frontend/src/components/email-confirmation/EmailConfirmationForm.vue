<template>
    <v-card class="border rounded pa-7 d-flex flex-column bg-transparent" style="width: 350px">
        <h2>Check your email</h2>
        <span class="text-grey">We've sent you a confirmation link</span>

        <span class="w-100 d-flex justify-center my-6"><v-icon size="50">mdi-email-outline</v-icon></span>

        <span class="text-center">We've sent an email to your address. Please click the link in the email to confirm your account.</span>
        <span class="text-center text-grey mt-3">If you don't see the email, check your spam folder.</span>
        <span class="text-center mt-3">You won't be able to sign in until you've verified your email address.</span>

        <v-btn class="text-none mt-3" color="white" type="submit" variant="elevated" to="/sign-in">Return to Sign In</v-btn>

        <span class="mt-3 text-center">Didn't receive the email?</span>
        <router-link class="text-decoration-none text-white text-center" @click.prevent="">Resend Confirmation</router-link>
    </v-card>
</template>

<script setup></script>

<style scoped></style>
