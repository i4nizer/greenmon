<template>
    <v-dialog max-width="500">
        <template v-slot:activator="{ props: activatorProps }">
            <v-btn v-bind="activatorProps" title="Edit Actuator" icon>
                <v-icon>mdi-pencil-outline</v-icon>
                <v-tooltip activator="parent">Click to edit actuator</v-tooltip>
            </v-btn>
        </template>

        <template v-slot:default="{ isActive }">
            <v-form class="rounded bg-grey-darken-4 pa-5" @submit.prevent="">
                <h2>Edit actuator details</h2>
                <span class="text-grey">Update details for your actuator.</span>

                <v-text-field
                    label="Name"
                    variant="outlined"
                    density="compact"
                    class="mt-6"
                ></v-text-field>

                <v-select
                    label="Input"
                    variant="outlined"
                    density="compact"
                    clearable
                    chips
                    :items="['Binary', 'Number']"
                ></v-select>

                <v-btn 
                    class="text-none" 
                    color="white" 
                    type="submit" 
                    variant="elevated"
                    text="Add Actuator"
                    @click="isActive.value = false"
                ></v-btn>
            </v-form>
        </template>
    </v-dialog>
</template>

<script setup></script>

<style scoped></style>
