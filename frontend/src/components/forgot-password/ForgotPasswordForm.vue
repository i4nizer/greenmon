<template>
    <v-form class="border rounded pa-7 d-flex flex-column" style="width: 350px">
        <h2>Forgot Password</h2>
        <span class="text-grey">Enter email to reset your password</span>

        <label class="mt-6" for="email">Email</label>
        <v-text-field
            id="email"
            variant="outlined"
            density="compact"
            placeholder="example@email.com"
        ></v-text-field>

        <v-btn
            style="text-transform: none"
            color="white"
            type="submit"
            variant="elevated"
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

<script setup></script>

<style scoped></style>
