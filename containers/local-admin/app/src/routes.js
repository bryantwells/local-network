import Home from '@/views/Home.vue';
import RadioPage from '@/views/Radio.vue';

export default [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/radio',
        name: 'Radio',
        component: RadioPage,
    },
];