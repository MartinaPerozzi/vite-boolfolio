<script>
import axios from "axios";
// Importare la card
import ProjectCard from './ProjectCard.vue';
import AppPagination from './AppPagination.vue';
export default {

    data() {
        return {
            projects: [
                // list: [],
                // pagination: [],
            ],
        };
    },

    // Definisco la props per ricevere l'info dal padre APP
    props: {
        projects: Array,
        pagination: Array,
    },

    components: {
        ProjectCard, AppPagination
    },
    emits: ['changePage']

};
</script>

<template>
    <!-- Stampo i progetti. Ricorda la key è necessaria. E qui mi chiamo le props che mi manda il figlio Card. -->
    <div class="mb-4">
        <div v-if="projects.length" class="row row-cols-3">
            <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
        </div>
        <h2 v-else class="text-muted">No Projects found</h2>
    </div>
    <!-- paginazione -->
    <div class="mt-auto pagination-custom" v-if="projects.length">
        <nav aria-label="Page Navigation">
            <ul class="pagination">
                <li class="page-item" v-for="page in pagination">
                    <button type="button" class="page-link" v-on:click="$emit('changePage', page.url)"
                        v-bind:class="{ disabled: !page.url, active: page.active }" v-html="page.label"></button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss" scoped></style>