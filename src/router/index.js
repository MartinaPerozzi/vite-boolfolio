import { createRouter, createWebHistory } from "vue-router";

import HomePage from '../pages/HomePage.vue';
import Contacts from '../pages/Contacts.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
            ,
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: Contacts
            ,
        },
    ]
});
export { router };