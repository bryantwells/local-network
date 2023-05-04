import Home from '@/views/Home.vue';
import RadioPreviewPage from '@/views/Radio.vue';
import RadioDashboardPage from '@/views/dashboard/RadioDashboard.vue';

export default [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/dashboard/radio',
        name: 'Radio Dashboard',
        component: RadioDashboardPage,
    },
    {
        path: '/radio',
        name: 'Radio Preview',
        component: RadioPreviewPage,
    },
];