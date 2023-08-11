import WelcomePage from '@/views/WelcomePage.vue';
import HomePage from '@/views/HomePage.vue';
import RadioPage from '@/views/RadioPage.vue';
import TvPage from '@/views/TvPage.vue';
import LibraryDashboardPage from '@/views/LibraryDashboardPage.vue';
import LibraryIndexPage from '@/views/LibraryIndexPage.vue';
import InfoPage from '@/views/InfoPage.vue';

export default [

    {
        path: '/',
        name: 'HomePage',
        component: HomePage,
        meta: {
            title: 'Brownsville Local Network',
        }
    },
    {
        path: '/radio',
        name: 'RadioPage',
        component: RadioPage,
        meta: {
            title: 'BLN: Local Radio',
        }
    },
    {
        path: '/tv',
        name: 'TvPage',
        component: TvPage,
        meta: {
            title: 'BLN: Local TV',
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
    {
        path: '/info',
        name: 'InfoPage',
        component: InfoPage,
        meta: {
            title: 'Brownsville Local Network',
        }
    },
];