<template>
    <v-container class="pa-0" fluid>

        <v-row>
            <v-col>
                <UserNav />
            </v-col>
        </v-row>
        
        <v-row class="px-10">
            <v-col cols="12" sm="6" xl="3">
                <AccountCard class="bg-transparent border" />
            </v-col>
            <v-col cols="12" sm="6" xl="3">
                <NotificationCard class="bg-transparent border" />
            </v-col>
            <v-col cols="12" sm="6" xl="3">
                <SecurityCard class="bg-transparent border" />
            </v-col>
            <v-col cols="12" sm="6" xl="3">
                <SignOutCard class="bg-transparent border" />
            </v-col>
        </v-row>

    </v-container>
</template>

<script setup>
import UserNav from '@/components/UserNav.vue';
import { defineAsyncComponent } from 'vue';



const AccountCard = defineAsyncComponent(() => import('@/components/settings/AccountCard.vue'))
const NotificationCard = defineAsyncComponent(() => import('@/components/settings/NotificationCard.vue'))
const SecurityCard = defineAsyncComponent(() => import('@/components/settings/SecurityCard.vue'))
const SignOutCard = defineAsyncComponent(() => import('@/components/settings/SignOutCard.vue'))



</script>

<style scoped>

</style>