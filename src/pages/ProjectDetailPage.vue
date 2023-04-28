<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
import AppLoader from '../components/AppLoader.vue';

export default {
    name: 'ProjectDetailPage',

    components: {
        ProjectCard,
        AppLoader
    },
    data() {
        return {
            isLoading: false,
            project: null,
        };
    },

    created() {
        this.isLoading = true,
            axios
                .get(`http://127.0.0.1:8002/api/projects/${this.$route.params.slug}`)
                .then((response) => {
                    // se la chimamata va a buon fine...
                    this.project = response.data;
                    console.log(response.data);
                })
                // Se c'è l'errore...
                .catch((err) => {
                    // Pushami alla pagina not found che ho creato personalizzata
                    this.$router.push({ name: 'not-found' });
                })
                // Comunque sia...
                .finally(() => {
                    this.isLoading = false;

                });;
    },
};
</script>

<template>
    <section class="container py-4">
        <AppLoader v-if="isLoading" />
        <h1>Dettaglio {{ project?.title }}</h1>
        <div class="row">
            <!-- Stampa la post card solo se c'è -->
            <ProjectCard v-if="project" :project="project" :isDetail="true" />
        </div>

    </section>
</template>

<style lang="scss" scoped></style>