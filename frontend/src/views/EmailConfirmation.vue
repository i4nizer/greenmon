<template>
    <v-container
        class="d-flex flex-column align-center justify-center"
        style="min-height: 100vh"
    >
        <EmailConfirmationCard></EmailConfirmationCard>
    </v-container>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const EmailConfirmationCard = defineAsyncComponent(() => import('@/components/email-confirmation/EmailConfirmationCard.vue'))

//
</script>

<style scoped></style>
