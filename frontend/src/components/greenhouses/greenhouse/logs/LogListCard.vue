<template>
    <v-card class="pa-3">
        <v-card-title class="d-flex ">
            <span class="flex-grow-1">Log Entries</span>
            <div class="d-flex flex-grow-1 ga-3">
                <v-text-field
                    label="Search logs..."
                    variant="outlined"
                    density="compact"
                ></v-text-field>
                <v-select
                    label="Filter"
                    variant="outlined"
                    density="compact"
                    multiple
                    chips
                    model-value="All Severities"
                    :items="['All Severities', 'Info', 'Warning', 'Alert', 'Error']"
                ></v-select>
                <v-btn 
                    class="border rounded bg-transparent"
                    size="40"
                    icon
                >
                    <v-icon size="20">mdi-sort</v-icon>
                </v-btn>
            </div>
        </v-card-title>
        
        <v-card-text class="d-flex flex-column ga-2">

            <div 
                v-for="l in logs"
                class="rounded border pa-4 d-flex justify-space-between align-center"
            >
                <v-icon :color="getIconColor(l?.type)">mdi-alert-circle-outline</v-icon>
                <div class="w-100 px-5">
                    <span>{{ l.source }}</span>
                    <v-chip class="ml-2">{{ l.type }}</v-chip>
                    <br>
                    <span class="text-grey">{{ l.message }}</span>
                </div>
                <span class="text-grey">{{ l.createdAt }}</span>
            </div>

            <span v-if="logs.length == 0" class="text-grey text-center font-weight-black my-10">No Logs Yet</span>

        </v-card-text>
    </v-card>
</template>

<script setup>
//


const props = defineProps(['logs'])



const getIconColor = (type) => type == 'Error' ? 'red' : type == 'Alert' ? 'orange' : type == 'Warning' ? 'yellow' : 'blue'
</script>

<style scoped>

</style>