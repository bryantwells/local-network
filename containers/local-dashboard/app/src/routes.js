import HomePage from '@/views/HomePage.vue';
import WelcomePage from '@/views/WelcomePage.vue';
import RadioDashboardPage from '@/views/RadioDashboardPage.vue';
import TvDashboardPage from '@/views/TvDashboardPage.vue';
import LibraryIndexPage from '@/views/LibraryIndexPage.vue';
import LibraryDashboardPage from '@/views/LibraryDashboardPage.vue';

export default [
    {
        path: '/',
        name: 'WelcomePage',
        component: WelcomePage,
        meta: {
            title: 'Brownsville Local Network',
        }
    },
    {
        path: '/home',
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
        path: '/library/:root?',
        name: 'LibraryIndexPage',
        component: LibraryIndexPage,
        meta: {
            title: 'BLN Dashboard: Local Archive',
        }
    },
    {
        path: '/library/upload',
        name: 'LibraryDashboardPage',
        component: LibraryDashboardPage,
        meta: {
            title: 'BLN Dashboard: Local Archive',
        }
    },
];