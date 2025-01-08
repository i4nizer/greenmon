<template>
    <v-card class="pa-3">
        <v-card-title>
            <v-icon>mdi-bell-outline</v-icon>
            <span class="ml-3">Notifications</span>
        </v-card-title>
        <v-card-subtitle>Configure how you want to be notified</v-card-subtitle>
        <v-card-text>
            <v-form>
                <div class="d-flex justify-space-between align-center">
                    <div>
                        <span>Email Notifications</span>
                        <br>
                        <span class="text-grey">Receive email alerts for important events</span>
                    </div>
                    <v-switch></v-switch>
                </div>
                <v-divider></v-divider>
                <div class="d-flex justify-space-between mt-5">
                    <div>
                        <span>Push Notifications</span>
                        <br>
                        <span class="text-grey">Receive push notifications on your devices</span>
                    </div>
                    <v-switch></v-switch>
                </div>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script setup>

</script>

<style scoped>

</style>