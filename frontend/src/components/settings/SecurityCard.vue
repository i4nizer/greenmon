<template>
    <v-card class="pa-3">
        <v-card-title>
            <v-icon>mdi-shield-lock-outline</v-icon>
            <span class="ml-3">Security</span>
        </v-card-title>
        <v-card-subtitle>Manage your security settings</v-card-subtitle>
        <v-card-text>
            <div class="d-flex flex-column ga-2 mb-3">
                <span>Two-Factor Authentication</span>
                <span class="text-grey">Add an extra layer of security to your account</span>
                <v-btn
                    text="Enable 2FA"
                    class="text-none bg-transparent border"
                    style="width: fit-content;"
                ></v-btn>
            </div>
            <v-divider></v-divider>
            <div class="d-flex flex-column ga-2">
                <span class="pt-3">Password</span>
                <v-btn
                    text="Change Password"
                    class="text-none bg-transparent border"
                ></v-btn>
            </div>
        </v-card-text>
    </v-card>
</template>

<script setup>

</script>

<style scoped>

</style>