<template>
    <v-app>
        <v-main>
            <router-view />
            <v-snackbar v-model="snackbar.show.value">
                {{ snackbar.message.value }}
                <template v-slot:actions>
                    <v-btn
                        text="Close"
                        color="pink"
                        class="text-none"
                        variant="text"
                        @click="snackbar.show.value = false"
                    ></v-btn>
                </template>
            </v-snackbar>
        </v-main>
    </v-app>
</template>

<script setup>
import snackbar from './utils/snackbar';




</script>
