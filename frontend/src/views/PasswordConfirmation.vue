<template>
    <v-container
        class="d-flex flex-column align-center justify-center"
        style="min-height: 100vh"
    >
        <PasswordConfirmationCard></PasswordConfirmationCard>
    </v-container>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const PasswordConfirmationCard = defineAsyncComponent(() => import('@/components/password-confirmation/PasswordConfirmationCard.vue'))

//
</script>

<style scoped></style>
