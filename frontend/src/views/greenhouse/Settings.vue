<template>
    <v-container class="pa-0" fluid>

        <v-row>
            <v-col>
                <UserNav />
            </v-col>
        </v-row>
        
        <v-row class="px-10">
            <v-col>
                <GreenhouseNavCard class="bg-transparent border" />
            </v-col>
        </v-row>
        
        <v-row class="px-10">
            <v-col>
                <GreenhouseSettingsCard class="bg-transparent border" />
            </v-col>
        </v-row>
        
    </v-container>
</template>

<script setup>
import UserNav from '@/components/UserNav.vue';
import { defineAsyncComponent } from 'vue';


const GreenhouseNavCard = defineAsyncComponent(() => import('@/components/greenhouses/greenhouse/GreenhouseNavCard.vue'))
const GreenhouseSettingsCard = defineAsyncComponent(() => import('@/components/greenhouses/greenhouse/settings/GreenhouseSettingsCard.vue'))



// fetch from API
const greenhouse = {
    
}

</script>

<style scoped>

</style>