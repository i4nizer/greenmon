<template>
    <v-container
        class="d-flex flex-column align-center justify-center"
        style="min-height: 100vh"
    >
        <ForgotPasswordForm></ForgotPasswordForm>
    </v-container>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const ForgotPasswordForm = defineAsyncComponent(() => import('@/components/forgot-password/ForgotPasswordForm.vue'))

//
</script>

<style scoped></style>
