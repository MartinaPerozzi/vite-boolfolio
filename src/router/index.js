import { createRouter, createWebHistory } from "vue-router";

import HomePage from '../pages/HomePage.vue';
import Contacts from '../pages/Contacts.vue';
import ProjectListPage from '../pages/ProjectListPage.vue';
import ProjectDetailPage from '../pages/ProjectDetailPage.vue';

const router = createRouter({
    history: createWebHistory(),
    linkLinkClass: 'active',
    linkExactActiveClass: '',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
            ,
        },
        {
            path: "/projects",
            name: "projects",
            component: ProjectListPage,
        },
        {
            path: "/projects/:slug",
            name: "project-detail",
            component: ProjectDetailPage,
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