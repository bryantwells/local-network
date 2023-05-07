import HomePage from '@/views/HomePage.vue';
import RadioDashboardPage from '@/views/RadioDashboardPage.vue';
import TvDashboardPage from '@/views/TvDashboardPage.vue';
import LibraryIndexPage from '@/views/LibraryIndexPage.vue';
import LibraryDashboardPage from '@/views/LibraryDashboardPage.vue';

export default [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage,
        meta: {
            title: 'BLN Dashboard',
        }
    },
    {
        path: '/radio',
        name: 'RadioDashboardPage',
        component: RadioDashboardPage,
        meta: {
            title: 'BLN Dashboard: Local Radio',
        }
    },
    {
        path: '/tv',
        name: 'TvDashboardPage',
        component: TvDashboardPage,
        meta: {
            title: 'BLN Dashboard: Local TV',
        }
    },
    {
        path: '/library',
        name: 'LibraryIndexPage',
        component: LibraryIndexPage,
        meta: {
            title: 'BLN Dashboard: Local Library',
        }
    },
    {
        path: '/library/upload',
        name: 'LibraryDashboardPage',
        component: LibraryDashboardPage,
        meta: {
            title: 'BLN Dashboard: Local Library',
        }
    },
];