<template>
    <v-card class="pa-3">
        <v-card-title>Sensors</v-card-title>
        <v-card-text 
            v-for="s in sensors" 
            :key="s._id"
            class="py-1 d-flex align-center ga-1"
        >
            <span class="pl-2">{{ s?.name ?? 'Sensor' }}</span>
            <v-spacer></v-spacer>
            <EditSensorDialog 
                :id="s._id" 
                :name="s.name"
                :output="s.output"
                @edit="onEdit"
            />
            <v-btn 
                size="35"
                icon
                :loading="deleting"
                @click="deleteSensor(s._id)"
            >
                <v-icon size="18">mdi-delete-outline</v-icon>
                <v-tooltip activator="parent">Click to delete sensor</v-tooltip>
            </v-btn>
        </v-card-text>
    </v-card>
</template>

<script setup>
import api from '@/utils/api';
import snackbar from '@/utils/snackbar';
import { defineAsyncComponent, inject, ref } from 'vue';

const EditSensorDialog = defineAsyncComponent(() => import('@/components/greenhouses/greenhouse/devices/EditSensorDialog.vue'))


// props
const props = defineProps(['sensors'])

// events
const emit = defineEmits(['edit', 'delete'])

// state
const deleting = ref(false)

// data
const mcuId = inject('mcuId')
const greenhouseId = inject('greenhouseId')


// re-emit edit
const onEdit = (id, name, output) => emit('edit', id, name, output)

// delete sensor
const deleteSensor = async (sensorId) => { 
    deleting.value = true

    await api.delete(`/user/greenhouse/${greenhouseId}/mcu/${mcuId}/sensor`, { data: { id: sensorId } })
        .then(res => emit('delete', sensorId))
        .then(res => snackbar.pop('Sensor removed successfully.'))
        .catch(err => snackbar.pop(err.toString()))

    deleting.value = false
}


</script>

<style scoped>

</style>