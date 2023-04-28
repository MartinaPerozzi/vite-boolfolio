<script>
import axios from "axios";
// COMPONENTS
import ProjectList from '../components/ProjectList.vue';


// EXPORT
export default {
    components: {
        ProjectList,
    },
};

</script>

<template>
    <div class="container mt-5">
        <!-- Mi chiamo le props mandate dal figlio Lista dei progetti -->
        <ProjectList @changePage="fetchProjects" />
    </div>
</template>

<style scoped></style>
