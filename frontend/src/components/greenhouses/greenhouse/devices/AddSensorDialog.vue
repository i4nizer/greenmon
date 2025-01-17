<template>
    <v-dialog v-model="dialog" max-width="500">
        <template v-slot:activator="{ props: activatorProps }">
            <v-btn v-bind="activatorProps" title="Add Sensor" icon>
                <v-icon>mdi-chip</v-icon>
                <v-tooltip activator="parent">Click to add sensor</v-tooltip>
            </v-btn>
        </template>

        <template v-slot:default>
            <v-form class="rounded bg-grey-darken-4 pa-5" v-model="valid" @submit.prevent="postSensor">
                <h2>Add sensor to your MCU</h2>
                <span class="text-grey">Enter the details for your sensor.</span>

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
                    :rules="[rules.required]"
                    :items="['Number', 'Image']"
                ></v-select>

                <v-btn 
                    :loading="loading"
                    class="text-none" 
                    color="white" 
                    type="submit" 
                    variant="elevated"
                    text="Add Sensor"
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



// events
const emit = defineEmits(['add'])

// state
const valid = ref(false)
const dialog = ref(false)
const loading = ref(false)

// data
const name = ref('')
const output = ref('Number')

const mcuId = inject('mcuId')
const greenhouseId = inject('greenhouseId')



// post sensor
const postSensor = async () => {
    loading.value = true

    const data = { name: name.value, output: output.value }
    await api.post(`/user/greenhouse/${greenhouseId}/mcu/${mcuId}/sensor`, data)
        .then(res => emit('add', res.data.object))
        .then(res => dialog.value = false)
        .then(res => snackbar.pop('Sensor added successfully.'))
        .catch(err => snackbar.pop(err.toString()))

    loading.value = false
}


</script>

<style scoped></style>
