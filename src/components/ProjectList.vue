<script>
import axios from "axios";
// Importare la card
import ProjectCard from './ProjectCard.vue';
import AppPagination from './AppPagination.vue';


export default {

    data() {
        return {
            projects: {
                list: [],
                pages: [],
            },
        };
    },
    // Definisco la props per ricevere l'info dal padre APP
    props: {
        projects: Array,
        pages: Array,
    },
    emits: ["changePage"],

    components: {
        ProjectCard, AppPagination
    },


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
        <AppPagination :pages="pages" @changePage="fetchProjects" />
    </div>
    <!-- <AppPagination :pages="pages" @changePage="fetchProjects" /> -->
</template>

<style lang="scss" scoped></style>