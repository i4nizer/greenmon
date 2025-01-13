<template>
    <v-dialog max-width="500">
        <template v-slot:activator="{ props: activatorProps }">
            <v-btn v-bind="activatorProps" title="Add Threshold" icon>
                <v-icon>mdi-tune</v-icon>
                <v-tooltip activator="parent">Click to add threshold</v-tooltip>
            </v-btn>
        </template>

        <template v-slot:default="{ isActive }">
            <v-form class="rounded bg-grey-darken-4 pa-5" @submit.prevent="">
                <h2>Add threhold for automations</h2>

                <span class="mt-4 my-2 text-grey">Choose a sensor and set a specific condition.</span>
                <div class="d-flex justify-space-between ga-2">
                    <v-select
                        class="w-25"
                        label="Sensors"
                        variant="outlined"
                        density="compact"
                        :items="sensors ?? []"
                    ></v-select>
                    <v-select
                        class="w-25"
                        label="Condition"
                        variant="outlined"
                        density="compact"
                        :items="['Above', 'Below', 'Equal']"
                    ></v-select>
                    <v-text-field
                        class="w-25"
                        label="Value"
                        variant="outlined"
                        density="compact"
                        type="number"
                    ></v-text-field>
                </div>

                <span class="mb-2 text-grey">Assign an action to an actuator once that condition is met.</span>
                <div class="d-flex justify-space-between ga-2">
                    <v-select 
                        class="w-50"
                        label="Actuators"
                        variant="outlined"
                        density="compact"
                        :items="actuators ? actuators : []"
                    ></v-select>
                    <v-select 
                        class="w-25"
                        label="Action"
                        variant="outlined"
                        density="compact"
                        :items="['Turn On', 'Turn Off']"
                    ></v-select>
                </div>

                <v-btn
                    class="text-none"
                    color="white"
                    type="submit"
                    variant="elevated"
                    text="Add Sensor"
                    @click="isActive.value = false"
                ></v-btn>
            </v-form>
        </template>
    </v-dialog>
</template>

<script setup>


const props = defineProps(['sensors', 'actuators'])
</script>

<style scoped></style>
