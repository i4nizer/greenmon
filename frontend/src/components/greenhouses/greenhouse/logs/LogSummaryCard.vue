<template>
    <v-card class="pa-3">
        <v-card-title>Log Summary</v-card-title>
        <v-card-subtitle>There are {{ logCounts.total }} logs.</v-card-subtitle>
        <v-card-text class="d-flex flex-wrap ga-3">
            <div class="border rounded pa-5 flex-grow-1">
                <span class="text-h5 text-red font-weight-black">{{ logCounts.error }}</span>
                <br>
                <span class="text-grey">Critical Errors</span>
            </div>
            <div class="border rounded pa-5 flex-grow-1">
                <span class="text-h5 text-orange font-weight-black">{{ logCounts.alert }}</span>
                <br>
                <span class="text-grey">Alerts</span>
            </div>
            <div class="border rounded pa-5 flex-grow-1">
                <span class="text-h5 text-yellow font-weight-black">{{ logCounts.warning }}</span>
                <br>
                <span class="text-grey">Warnings</span>
            </div>
            <div class="border rounded pa-5 flex-grow-1">
                <span class="text-h5 text-blue font-weight-black">{{ logCounts.info }}</span>
                <br>
                <span class="text-grey">Information</span>
            </div>
        </v-card-text>
    </v-card>
</template>

<script setup>
//


const props = defineProps(['logs'])


// extract 
const logCounts = {
    total: props.logs.length,
    info: props.logs.filter(l => l.type == 'Info').length,
    warning: props.logs.filter(l => l.type == 'Warning').length,
    error: props.logs.filter(l => l.type == 'Error').length,
    alert: props.logs.filter(l => l.type == 'Alert').length,
}


</script>

<style scoped>

</style>