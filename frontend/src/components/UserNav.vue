<template>
    <div class="border-b pa-3 ga-10 d-flex flex-row align-center justify-space-between">
        <!-- Logo -->
        <div class="d-flex align-center">
            <v-icon>mdi-speedometer</v-icon>
            <span class="ml-1 text-h6">Greenmon</span>
        </div>

        <!-- Navigation -->
        <div class="d-flex align-center">
            <!-- Full-size buttons (visible on sm and larger) -->
            <div class="d-none d-sm-flex">
                <v-btn to="/" class="text-none" variant="plain">Greenhouses</v-btn>
                <v-btn to="/settings" class="text-none" variant="plain">Settings</v-btn>
                <v-btn to="/sign-in" class="text-none" variant="plain">Logout</v-btn>
            </div>

            <!-- Icon buttons (visible on sm and smaller) -->
            <div class="d-flex d-sm-none">
                <v-btn to="/" variant="plain" title="Greenhouses" icon><v-icon>mdi-home</v-icon></v-btn>
                <v-btn to="/settings" variant="plain" title="Settings" icon><v-icon>mdi-cog</v-icon></v-btn>
                <v-btn to="/sign-in" variant="plain" title="Logout" icon><v-icon>mdi-logout</v-icon></v-btn>
            </div>
        </div>
    </div>
</template>


<script setup>

</script>

<style scoped>

</style>