<template>
    <v-card class="pa-3">
        <v-card-title>
            <v-icon>mdi-account-cog-outline</v-icon>
            <span class="ml-3">Account Settings</span>
        </v-card-title>
        <v-card-subtitle>Manage your account settings and preferences</v-card-subtitle>
        <v-card-text>
            <v-form>
                <label for="name">Name</label>
                <v-text-field
                    id="name"
                    variant="outlined"
                    density="compact"
                ></v-text-field>
                <label for="email">Email</label>
                <v-text-field
                    id="email"
                    variant="outlined"
                    density="compact"
                ></v-text-field>
                <v-btn
                    text="Save Changes"
                    class="text-none"
                    color="white"
                ></v-btn>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script setup>

</script>

<style scoped>

</style>