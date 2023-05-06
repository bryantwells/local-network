import Home from '@/views/Home.vue';
import RadioPage from '@/views/Radio.vue';
import RadioDashboardPage from '@/views/dashboard/RadioDashboard.vue';
import TvPage from '@/views/Tv.vue';
import LibraryPage from '@/views/Library.vue';
import LibraryDashboardPage from '@/views/dashboard/LibraryDashboard.vue'

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
    {
        path: '/library',
        name: 'Local Library',
        component: LibraryPage,
    },
    {
        path: '/dashboard/library',
        name: 'Library Dashboard',
        component: LibraryDashboardPage,
    },
];