<template>
    <v-container class="pa-0" fluid>

        <v-row>
            <v-col>
                <UserNav />
            </v-col>
        </v-row>
        
        <v-row class="px-5 px-sm-10">
            <v-col>
                <GreenhouseNavCard class="bg-transparent border" />
            </v-col>
        </v-row>
        
        <v-row class="px-5 px-sm-10">
            <v-col 
                v-for="r in metricReadings"
                cols="12" sm="6" md="4" lg="3"
            >
                <MetricCard 
                    :text="r.type" 
                    :value="r.value"
                    :unit="r.unit"
                    :icon="r.type == 'Temperature'? 'mdi-thermometer': r.type == 'Light Intensity'? 'mdi-weather-sunny' : 'mdi-water'"
                    class="flex-grow-2"
                    style="height: fit-content"
                />
            </v-col>
            <v-col 
                v-for="r in imageReadings"
                cols="12" md="12" lg="9" xxl="6"
            >
                <CameraCard
                    class="flex-grow-1"
                    style="height: fit-content"
                />
            </v-col>
            <v-col cols="12" sm="6" md="4" lg="3">
                <ControlCard :actuators="actuators" />
            </v-col>
            <v-col cols="12" sm="6" md="4" lg="3">
                <ActivityCard :activities="logs" />
            </v-col>
        </v-row>
        
    </v-container>
</template>

<script setup>
import UserNav from '@/components/UserNav.vue';
import { defineAsyncComponent, onBeforeMount } from 'vue';


const GreenhouseNavCard = defineAsyncComponent(() => import('@/components/greenhouses/greenhouse/GreenhouseNavCard.vue'))
const MetricCard = defineAsyncComponent(() => import('@/components/greenhouses/greenhouse/dashboard/MetricCard.vue'))
const CameraCard = defineAsyncComponent(() => import('@/components/greenhouses/greenhouse/dashboard/CameraCard.vue'))
const ControlCard = defineAsyncComponent(() => import('@/components/greenhouses/greenhouse/dashboard/ControlCard.vue'))
const ActivityCard = defineAsyncComponent(() => import('@/components/greenhouses/greenhouse/dashboard/ActivityCard.vue'))


// fetch from API
const readings = [
    {
        type: 'Temperature',
        unit: '°C',
        value: 23.6,
    },
    {
        type: 'Humidity',
        unit: '%',
        value: 83.6,
    },
    {
        type: 'Light Intensity',
        unit: 'lux',
        value: 902,
    },
    {
        type: 'Soil Moisture',
        unit: '%',
        value: 83.4,
    },
    {
        type: 'Image',
        unit: 'jpeg',
        value: '',  // path or url
    },
]

// metric types
const metrics = ['Temperature', 'Humidity', 'Light Intensity', 'Soil Moisture']
const metricReadings = readings.filter(r => metrics.includes(r.type))

// image types
const imageReadings = readings.filter(r => r.type == 'Image')

// actuators
const actuators = [
    {
        name: 'Fan',
    },
    {
        name: 'Water Pump',
    },
    {
        name: 'Light',
    },
]

// recent activities
const logs = [
    {
        type: 'Info',
        message: 'Irrigation system activated',
    },
    {
        type: 'Warn',
        message: 'High temperature alert',
    },
    {
        type: 'Info',
        message: 'Light intensity normalized',
    },
    {
        type: 'Info',
        message: 'Soil moisture low warning',
    },
]


// get greenhouse id
const route = useRoute()
const id = route.params.id

// nav back without id
onBeforeMount(() => { if (!id) router.push('/greenhouses') })

</script>

<style scoped>

</style>