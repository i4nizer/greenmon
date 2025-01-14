<template>
    <v-expansion-panel>
        <v-expansion-panel-title class="d-flex ga-1">
            
            <v-text-field
                :loading="updating"
                class="mr-10"
                :variant="titleVariant"
                density="compact"
                hide-details
                ref="title-input"
                v-model="title"
                :rules="[rules.required, rules.min3]"
                @blur="editMcu"
                @focus="titleVariant = 'outlined'"
            ></v-text-field>
            
            <AddSensorDialog :mcu-id="props.id" @add="onAddSensor" />
            <AddActuatorDialog />
            <AddThresholdDialog />
            
            <v-divider class="mx-2" vertical></v-divider>
            
            <v-btn @click="titleInput.focus()" icon>
                <v-icon>mdi-pencil-outline</v-icon>
                <v-tooltip activator="parent">Click to edit microcontroller</v-tooltip>
            </v-btn>
            <v-btn :loading="loading" class="mr-2" @click="deleteMcu" icon>
                <v-icon>mdi-delete-outline</v-icon>
                <v-tooltip activator="parent">Click to delete microcontroller</v-tooltip>
            </v-btn>

        </v-expansion-panel-title>
        <v-expansion-panel-text>
            <v-container fluid>

                <v-row>
                    <v-col cols="6" sm="12" md="6">
                        <SensorsCard 
                            class="bg-transparent border" 
                            :sensors="sensors" 
                            @edit="onEditSensor"
                            @delete="onDeleteSensor"
                        />
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
import api from '@/utils/api';
import rules from '@/utils/rules';
import snackbar from '@/utils/snackbar';
import { provide } from 'vue';
import { defineAsyncComponent, inject, onBeforeMount, ref, useTemplateRef } from 'vue';


const AddSensorDialog = defineAsyncComponent(() => import('@/components/greenhouses/greenhouse/devices/AddSensorDialog.vue'))
const AddActuatorDialog = defineAsyncComponent(() => import('@/components/greenhouses/greenhouse/devices/AddActuatorDialog.vue'))
const AddThresholdDialog = defineAsyncComponent(() => import('@/components/greenhouses/greenhouse/devices/AddThresholdDialog.vue'))
const SensorsCard = defineAsyncComponent(() => import('@/components/greenhouses/greenhouse/devices/SensorsCard.vue'))
const ActuatorsCard = defineAsyncComponent(() => import('@/components/greenhouses/greenhouse/devices/ActuatorsCard.vue'))
const ThresholdCard = defineAsyncComponent(() => import('@/components/greenhouses/greenhouse/devices/ThresholdCard.vue'))


// emits
const emit = defineEmits(['edit', 'delete'])

// props
const props = defineProps(['id', 'name'])

// state
const loading = ref(false)
const updating = ref(false)

// data
const title = ref(props?.name ?? 'MCU')
const titleInput = useTemplateRef('title-input')
const titleVariant = ref('plain')

const greenhouseId = inject('greenhouseId')

const sensors = ref([])
const actuators = ref([])
const thresholds = ref([])

// pass mcuId
provide('mcuId', props.id)



// edit mcu
const editMcu = async () => {
    titleVariant.value = 'plain'

    // invalid
    if (title.value.length < 3) return title.value = props.name

    // no changes
    if (title.value == props.name) return;
    updating.value = true

    const data = { id: props.id, name: title.value }
    await api.patch(`/user/greenhouse/${props.id}/mcu`, data)
        .then(res => emit('edit', props.id, title.value))
        .then(res => snackbar.pop('Microcontroller details updated successfully.'))
        .catch(err => snackbar.pop(err.toString()))

    updating.value = false
}

// delete mcu
const deleteMcu = async () => {
    loading.value = true

    await api.delete(`/user/greenhouse/${props.id}/mcu`, { data: { id: props.id } })
        .then(res => emit('delete', props.id))
        .then(res => snackbar.pop('Microcontroller deleted successfully.'))
        .catch(err => snackbar.pop(err.toString()))

    loading.value = false
}

// add sensor
const onAddSensor = (sensor) => sensors.value.push(sensor)

// edit sensor
const onEditSensor = (id, name, output) => {
    const sensor = sensors.value.find(s => s._id == id)
    sensor.name = name
    sensor.output = output
}

// delete sensor
const onDeleteSensor = (id) => sensors.value = sensors.value.filter(s => s._id != id)


// load data
onBeforeMount(async () => {

    // load sensors
    await api.get(`/user/greenhouse/${greenhouseId}/mcu/${props.id}/sensor`)
        .then(res => sensors.value = res.data.object)
        .catch(err => snackbar.pop(err.toString()))

    // load actuators
    await api.get(`/user/greenhouse/${greenhouseId}/mcu/${props.id}/actuator`)
        .then(res => actuators.value = res.data.object)
        .catch(err => snackbar.pop(err.toString()))



})


</script>

<style scoped>

</style>