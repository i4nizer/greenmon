<template>
    <v-card class="bg-transparent border pa-2">
        <v-card-title class="d-flex justify-space-between">
            <span>Latest Capture</span>
            <v-btn class="bg-transparent border text-none">
                <v-icon>mdi-refresh</v-icon>
                <span class="d-none d-md-block">Refresh</span>
            </v-btn>
        </v-card-title>
        <v-card-text>
            <div class="bg-grey-darken-4 rounded w-100 d-flex justify-center align-center" style="aspect-ratio: 16/9;">
                <div class="text-grey">
                    <v-icon size="50">mdi-camera-outline</v-icon>
                    <span class="ml-1">Image Capture</span>
                </div>
                <img v-if="0" class="w-100" src="">
            </div>
            <sub class="text-grey" style="width: 100%;">Captured 30 minutes ago</sub>
        </v-card-text>  
    </v-card>
</template>

<script setup>

</script>

<style scoped>

</style>