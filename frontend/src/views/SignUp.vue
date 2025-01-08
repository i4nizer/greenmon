<template>
    <v-container
        class="d-flex flex-column align-center justify-center"
        style="min-height: 100vh"
    >
        <SignUpForm></SignUpForm>
    </v-container>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const SignUpForm = defineAsyncComponent(() => import('@/components/sign-up/SignUpForm.vue'))

//
</script>

<style scoped></style>
