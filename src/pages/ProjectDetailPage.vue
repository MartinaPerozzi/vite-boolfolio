<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'ProjectDetailPage',

    components: {
        ProjectCard,
    },
    data() {
        return {
            project: null,
        };
    },

    created() {

        axios
            .get(`http://127.0.0.1:8002/api/projects/${this.$route.params.slug}`)
            .then((response) => {
                this.project = response.data;
                console.log(response.data);
            });
    },
};
</script>

<template>
    <section class="container py-4">
        <h1>Dettaglio {{ project?.title }}</h1>
        <div class="row">
            <!-- Stampa la post card solo se c'è -->
            <ProjectCard v-if="project" :project="project" :isDetail="true" />
        </div>

    </section>
</template>

<style lang="scss" scoped></style>