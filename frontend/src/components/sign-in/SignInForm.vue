<template>
    <v-form class="border rounded pa-7 d-flex flex-column" style="width: 350px">
        <h2>Sign in to your account</h2>
        <span class="text-grey">Enter your credentials to access your IoT Dashboard</span>

        <label class="mt-6" for="email">Email</label>
        <v-text-field
            id="email"
            variant="outlined"
            density="compact"
            placeholder="example@email.com"
        ></v-text-field>

        <label for="password">Password</label>
        <v-text-field
            id="password"
            variant="outlined"
            density="compact"
            type="password"
        ></v-text-field>

        <v-btn class="text-none" color="white" type="submit" variant="elevated">Sign In</v-btn>

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

<script setup></script>

<style scoped></style>
