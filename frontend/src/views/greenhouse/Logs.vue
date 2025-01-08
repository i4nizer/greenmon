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
                <LogSummaryCard class="bg-transparent border" :logs="logs" />
            </v-col>
        </v-row>
        
        <v-row class="px-10">
            <v-col>
                <LogListCard class="bg-transparent border" :logs="logs" />
            </v-col>
        </v-row>
        
    </v-container>
</template>

<script setup>
import UserNav from '@/components/UserNav.vue';
import { defineAsyncComponent } from 'vue';


const GreenhouseNavCard = defineAsyncComponent(() => import('@/components/greenhouses/greenhouse/GreenhouseNavCard.vue'))
const LogSummaryCard = defineAsyncComponent(() => import('@/components/greenhouses/greenhouse/logs/LogSummaryCard.vue'))
const LogListCard = defineAsyncComponent(() => import('@/components/greenhouses/greenhouse/logs/LogListCard.vue'))


// fetch from API
const logs = [
    {
        type: 'Info',
        source: 'Soil Moisture Sensor',
        message: 'Irrigition system activated',
        createdAt: new Date(),
    },
    {
        type: 'Warning',
        source: 'DHT11',
        message: 'Temperature near threshold',
        createdAt: new Date(),
    },
    {
        type: 'Error',
        source: 'System',
        message: 'DHT11 sensor offline',
        createdAt: new Date(),
    },
    {
        type: 'Alert',
        source: 'Camera',
        message: 'Nitrogen deficiency detected',
        createdAt: new Date(),
    },
]

</script>

<style scoped>

</style>