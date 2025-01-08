<template>
    <v-form class="border rounded pa-7 d-flex flex-column" style="width: 350px">
        <h2>Create an account</h2>
        <span class="text-grey">Sign up for your IoT Dashboard account</span>

        <label class="mt-6" for="name">Name</label>
        <v-text-field
            id="name"
            variant="outlined"
            density="compact"
            placeholder="Example Name"
        ></v-text-field>

        <label for="email">Email</label>
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

        <v-btn style="text-transform: none;" color="white" type="submit" variant="elevated">Sign Up</v-btn>

        <span class="align-self-center mt-6"
            >Already have an account?
            <router-link class="text-decoration-none text-white" to="/sign-in"
                >Sign In</router-link
            ></span
        >
    </v-form>
</template>

<script setup></script>

<style scoped></style>
