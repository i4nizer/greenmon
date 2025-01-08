import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    {
        path: '/',
        name: 'Home',
        redirect: '/greenhouses'
    },
    {
        path: '/greenhouses',
        name: 'Greenhouses',
        component: () => import('@/views/Greenhouses.vue'),
    },
    {
        path: '/greenhouses/dashboard',
        name: 'Greenhouse Dashboard',
        component: () => import('@/views/greenhouse/Dashboard.vue'),
    },
    {
        path: '/greenhouses/devices',
        name: 'Greenhouse Devices',
        component: () => import('@/views/greenhouse/Devices.vue'),
    },
    {
        path: '/greenhouses/logs',
        name: 'Greenhouse logs',
        component: () => import('@/views/greenhouse/Logs.vue'),
    },
    {
        path: '/greenhouses/settings',
        name: 'Greenhouse Settings',
        component: () => import('@/views/greenhouse/Settings.vue'),
    },
    {
        path: '/sign-up',
        name: 'Sign Up',
        component: () => import('@/views/SignUp.vue'),
    },
    {
        path: '/sign-in',
        name: 'Sign In',
        component: () => import('@/views/SignIn.vue'),
    },
    {
        path: '/email-confirmation',
        name: 'Email Confirmation',
        component: () => import('@/views/EmailConfirmation.vue'),
    },
    {
        path: '/forgot-password',
        name: 'Forgot Password',
        component: () => import('@/views/ForgotPassword.vue'),
    },
    {
        path: '/reset-password',
        name: 'Reset Password',
        component: () => import('@/views/ResetPassword.vue'),
    },
    {
        path: '/settings',
        name: 'Settings',
        component: () => import('@/views/Settings.vue'),
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
