<template>
    <v-container
        class="d-flex flex-column align-center justify-center"
        style="min-height: 100vh"
    >
        <SignInForm></SignInForm>
    </v-container>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const SignInForm = defineAsyncComponent(() => import('@/components/sign-in/SignInForm.vue'))

//
</script>

<style scoped></style>
