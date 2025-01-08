<template>
    <v-form class="border rounded pa-7 d-flex flex-column" style="width: 350px">
        <h2>Reset Password</h2>
        <span class="text-grey">Enter your new password below</span>

        <label class="mt-6" for="new-password">New Password</label>
        <v-text-field
            id="new-password"
            variant="outlined"
            density="compact"
            type="password"
        ></v-text-field>

        <label for="confirm-password">Confirm Password</label>
        <v-text-field
            id="confirm-password"
            variant="outlined"
            density="compact"
            type="password"
        ></v-text-field>

        <v-btn style="text-transform: none;" color="white" type="submit" variant="elevated">Reset Password</v-btn>
    </v-form>
</template>

<script setup></script>

<style scoped></style>
