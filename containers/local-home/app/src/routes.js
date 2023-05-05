import Home from '@/views/Home.vue';
import RadioPage from '@/views/Radio.vue';
import RadioDashboardPage from '@/views/dashboard/RadioDashboard.vue';
import TvPage from '@/views/Tv.vue';

export default [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/radio',
        name: 'Local Radio',
        component: RadioPage,
    },
    {
        path: '/dashboard/radio',
        name: 'Local Radio Dashboard',
        component: RadioDashboardPage,
    },
    {
        path: '/tv',
        name: 'Local TV',
        component: TvPage,
    },
];