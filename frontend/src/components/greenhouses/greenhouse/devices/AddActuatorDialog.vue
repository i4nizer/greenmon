<template>
    <v-dialog max-width="500">
        <template v-slot:activator="{ props: activatorProps }">
            <v-btn
                v-bind="activatorProps"
                color="white"
                text="Add Actuator"
                variant="flat"
                prepend-icon="mdi-plus"
                class="text-none"
            ></v-btn>
        </template>

        <template v-slot:default="{ isActive }">
            <v-form class="rounded bg-grey-darken-4 pa-5" @submit.prevent="">
                <h2>Add actuator to your MCU</h2>
                <span class="text-grey">Enter the details for your actuator.</span>

                <v-text-field
                    label="Name"
                    variant="outlined"
                    density="compact"
                    class="mt-6"
                ></v-text-field>

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
