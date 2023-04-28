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
        // projects: Array,
        // pages: Array,
    },
    emits: ["changePage"],

    components: {
        ProjectCard, AppPagination
    },
    methods: {
        fetchProjects(endpoint = null) {

            if (!endpoint) endpoint = 'http://127.0.0.1:8002/api/projects';
            axios
                .get(endpoint)
                .then((response) => {
                    this.projects.list = response.data.data;
                    this.projects.pages = response.data.links;

                    console.log(response.data);
                })
        },
    },
    created() {
        this.fetchProjects();
    },
};
</script>

<template>
    <!-- Stampo i progetti. Ricorda la key è necessaria. E qui mi chiamo le props che mi manda il figlio Card. -->
    <div class="mb-4">
        <div v-if="projects.list.length" class="row row-cols-4">
            <ProjectCard v-for="project in projects.list" :key="project.id" :project="project" :isDetail="false" />
        </div>
        <h2 v-else class="text-muted">No Projects found</h2>
    </div>
    <!-- paginazione -->
    <div class="mt-auto pagination-custom" v-if="projects.list.length">
        <AppPagination :pages="projects.pages" @changePage="fetchProjects" />
    </div>
    <!-- <AppPagination :pages="pages" @changePage="fetchProjects" /> -->
</template>

<style lang="scss" scoped></style>