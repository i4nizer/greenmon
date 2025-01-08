<template>
    <v-expansion-panel>
        <v-expansion-panel-title>{{ mcu?.name ?? 'MCU' }}</v-expansion-panel-title>
        <v-expansion-panel-text>
            <v-container fluid>

                <v-row>
                    <v-col class="d-flex justify-end ga-2">
                        <AddSensorDialog />
                        <AddActuatorDialog />
                        <AddThresholdDialog />
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="6" sm="12" md="6">
                        <SensorsCard class="bg-transparent border" :sensors="sensors" />
                    </v-col>
                    <v-col cols="6" sm="12" md="6">
                        <ActuatorsCard class="bg-transparent border" :actuators="actuators" />
                    </v-col>
                    <v-col cols="12">
                        <ThresholdCard class="bg-transparent border" :thresholds="thresholds" />
                    </v-col>
                </v-row>

            </v-container>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>


<script setup>
import { defineAsyncComponent } from 'vue';

//


const AddSensorDialog = defineAsyncComponent(() => import('@/components/greenhouses/greenhouse/devices/AddSensorDialog.vue'))
const AddActuatorDialog = defineAsyncComponent(() => import('@/components/greenhouses/greenhouse/devices/AddActuatorDialog.vue'))
const AddThresholdDialog = defineAsyncComponent(() => import('@/components/greenhouses/greenhouse/devices/AddThresholdDialog.vue'))
const SensorsCard = defineAsyncComponent(() => import('@/components/greenhouses/greenhouse/devices/SensorsCard.vue'))
const ActuatorsCard = defineAsyncComponent(() => import('@/components/greenhouses/greenhouse/devices/ActuatorsCard.vue'))
const ThresholdCard = defineAsyncComponent(() => import('@/components/greenhouses/greenhouse/devices/ThresholdCard.vue'))



// sensors from API
const sensors = [
    {
        name: 'DHT11',
        status: 'Online'
    },
    {
        name: 'Soil Moisture Sensor',
        status: 'Offline'
    },
]

// actuators from API
const actuators = [
    {
        name: 'Water Pump',
        status: 'Off'
    },
    {
        name: 'Fan',
        status: 'On'
    },
]

// thresholds from API
const thresholds = [
    {
        type: 'Temperature',
        unit: 'C',
        value: 35,
        condition: '>',
        action: true,
        sensor: 'DHT11',
        actuator: 'Fan'
    },
]

const props = defineProps(['mcu'])
</script>

<style scoped>

</style>