<template>
    <v-dialog v-model="dialog" max-width="500">
        <template v-slot:activator="{ props: activatorProps }">
            <v-btn v-bind="activatorProps" title="Edit Sensor" size="35" icon>
                <v-icon size="18">mdi-pencil-outline</v-icon>
                <v-tooltip activator="parent">Click to edit sensor</v-tooltip>
            </v-btn>
        </template>

        <template v-slot:default>
            <v-form class="rounded bg-grey-darken-4 pa-5" v-model="valid" @submit.prevent="patchSensor">
                <h2>Edit sensor details</h2>
                <span class="text-grey">Update details for your sensor.</span>

                <v-text-field
                    label="Name"
                    variant="outlined"
                    density="compact"
                    class="mt-6"
                    v-model="name"
                    :rules="[rules.required, rules.min3]"
                ></v-text-field>

                <v-select
                    label="Output"
                    variant="outlined"
                    density="compact"
                    chips
                    v-model="output"
                    :items="['Number', 'Image']"
                ></v-select>

                <v-btn 
                    class="text-none" 
                    color="white" 
                    type="submit" 
                    variant="elevated"
                    text="Edit Sensor"
                ></v-btn>
            </v-form>
        </template>
    </v-dialog>
</template>

<script setup>
import api from '@/utils/api';
import rules from '@/utils/rules';
import snackbar from '@/utils/snackbar';
import { inject, ref } from 'vue';



// props
const props = defineProps(['id', 'name', 'output'])

// events
const emit = defineEmits(['edit'])

// state
const valid = ref(false)
const dialog = ref(false)
const loading = ref(false)

// data
const name = ref(props.name)
const output = ref(props.output)

const mcuId = inject('mcuId')
const greenhouseId = inject('greenhouseId')


// patch sensor
const patchSensor = async () => {
    loading.value = true

    const data = { id: props.id, name: name.value, output: output.value }
    await api.patch(`/user/greenhouse/${greenhouseId}/mcu/${mcuId}/sensor`, data)
        .then(res => emit('edit', props.id, name.value, output.value))
        .then(res => snackbar.pop('Sensor details updated successfully.'))
        .catch(err => snackbar.pop(err.toString()))
        .finally(() => dialog.value = false)

    loading.value = false
}




</script>

<style scoped></style>
