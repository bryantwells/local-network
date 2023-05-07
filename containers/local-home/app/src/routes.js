import HomePage from '@/views/HomePage.vue';
import RadioPage from '@/views/RadioPage.vue';
import TvPage from '@/views/TvPage.vue';
import LibraryPage from '@/views/LibraryPage.vue';
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
        path: '/library',
        name: 'LibraryPage',
        component: LibraryPage,
        meta: {
            title: 'BLN: Local Library',
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