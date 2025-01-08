<template>
    <v-container
        class="d-flex flex-column align-center justify-center"
        style="min-height: 100vh"
    >
        <EmailConfirmationForm></EmailConfirmationForm>
    </v-container>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const EmailConfirmationForm = defineAsyncComponent(() => import('@/components/email-confirmation/EmailConfirmationForm.vue'))

//
</script>

<style scoped></style>
