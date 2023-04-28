import { createRouter, createWebHistory } from "vue-router";

import HomePage from '../pages/HomePage.vue';
import Contacts from '../pages/Contacts.vue';
import ProjectListPage from '../pages/ProjectListPage.vue';
import ProjectDetailPage from '../pages/ProjectDetailPage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';
import TypeProjectPage from '../pages/TypeProjectPage.vue';

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
        {
            path: '/type/:type_id/projects',
            name: 'type_projects',
            component: TypeProjectPage
            ,
        },
        // Ogni rotta che non corrisponde a quelle da me definite porta alla 404
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundPage
            ,
        },
    ]
});
export { router };