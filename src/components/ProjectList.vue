<script>
// Importare la card
import ProjectCard from './ProjectCard.vue';
export default {
    // Definisco la props per ricevere l'info dal padre APP
    props: { projects: Array, },

    components: {
        ProjectCard,
    }
};
</script>

<template>
    <!-- Stampo i progetti. Ricorda la key è necessaria. E qui mi chiamo le props che mi manda il figlio Card. -->
    <div class="row row-cols-3">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
</template>

<style lang="scss" scoped></style>