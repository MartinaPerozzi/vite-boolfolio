<script>
import axios from "axios";
// Importare la card
import ProjectCard from './ProjectCard.vue';
import AppPagination from './AppPagination.vue';
// import AppLoader from './AppLoader.vue';


export default {

    data() {
        return {
            isLoading: false,
            errorMess: false,
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
        type: String,
    },
    emits: ["changePage"],

    components: {
        ProjectCard, AppPagination,
    },
    methods: {
        fetchProjects(endpoint = null) {
            this.isLoading = true;

            if (!endpoint) endpoint = 'http://127.0.0.1:8002/api/projects';
            axios
                .get(endpoint)
                .then((response) => {
                    this.projects.list = response.data.data;
                    this.projects.pages = response.data.links;

                    console.log(response.data);
                })
                .catch((err) => {
                    // Pushami alla pagina not found che ho creato personalizzata
                    this.errorMess = err.message;
                })
                .finally(() => {
                    this.isLoading = false;
                })

        },
    },
    created() {
        this.fetchProjects();
    },
    // Computed per le tipologie
    computed: {
        title() {
            if (this.type == 'most_recent') return 'Progetti';
            if (this.type == 'by_type') return 'Types';
            return 'Lista Progetti';
        },

        baseEndpoint() {
            if (this.type == 'most_recent') return 'http://127.0.0.1:8002/api/projects';
            if (this.type == 'by_type') return `http://127.0.0.1:8000/api/type/${this.$route.params.type_id}/projects`;
            return 'http://127.0.0.1:8002/api/projects';
        }

    }
};
</script>

<template>
    <section>
        <h2>{{ title }}</h2>
        <AppLoader v-if="isLoading" />
        <!-- se ci sono errori entra in questo blocco -->
        <div v-if="errorMess">
            <div class="alert alert-danger d-flex align-items-center" role="alert">
                <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Warning:">
                    <use xlink:href="#exclamation-triangle-fill" />
                </svg>
                <div>
                    <h2>404 | NOT FOUND</h2>
                </div>
            </div>
        </div>

        <!-- Altrimenti se ci sono progetti:
        Stampo i progetti. Ricorda la key è necessaria. E qui mi chiamo le props che mi manda il figlio Card. -->
        <div v-else-if="projects.list.length" class="row row-cols-4">
            <ProjectCard v-for="project in projects.list" :key="project.id" :project="project" :isDetail="false" />
        </div>
        <!-- Se non ci sono progetti -->
        <h2 v-else class="text-muted">No Projects found</h2>

        <!-- paginazione -->
        <div class="mt-auto pagination-custom" v-if="projects.list.length">
            <AppPagination :pages="projects.pages" @changePage="fetchProjects" />
        </div>
        <!-- <AppPagination :pages="pages" @changePage="fetchProjects" /> -->
    </section>
</template>

<style lang="scss" scoped></style>