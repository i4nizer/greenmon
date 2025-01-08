<template>
    <v-container
        class="d-flex flex-column align-center justify-center"
        style="min-height: 100vh"
    >
        <ResetPasswordForm></ResetPasswordForm>
    </v-container>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const ResetPasswordForm = defineAsyncComponent(() => import('@/components/reset-password/ResetPasswordForm.vue'))

//
</script>

<style scoped></style>
