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
        path: '/greenhouses/:id/dashboard',
        name: 'Greenhouse Dashboard',
        component: () => import('@/views/greenhouse/Dashboard.vue'),
    },
    {
        path: '/greenhouses/:id/devices',
        name: 'Greenhouse Devices',
        component: () => import('@/views/greenhouse/Devices.vue'),
    },
    {
        path: '/greenhouses/:id/logs',
        name: 'Greenhouse logs',
        component: () => import('@/views/greenhouse/Logs.vue'),
    },
    {
        path: '/greenhouses/:id/settings',
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
        path: '/email-confirmation/:token?',
        name: 'Email Confirmation',
        component: () => import('@/views/EmailConfirmation.vue'),
    },
    {
        path: '/forgot-password',
        name: 'Forgot Password',
        component: () => import('@/views/ForgotPassword.vue'),
    },
    {
        path: '/password-confirmation',
        name: 'Password Confirmation',
        component: () => import('@/views/PasswordConfirmation.vue'),
    },
    {
        path: '/reset-password/:token?',
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
