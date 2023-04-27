<script>
// COMPONENTS
import ProjectList from '../components/ProjectList.vue';
import axios from "axios";


// EXPORT
export default {
    components: {
        ProjectList,
    },

    // emits: ["changePage"],

    data() {
        return {
            projects: [
                // list: [],
                // pagination: [],
            ],
        };
    },

    methods: {
        fetchProjects() {

            axios
                .get('http://127.0.0.1:8002/api/projects')
                .then((response) => {
                    this.projects = response.data;
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
    <div class="container mt-5">
        <!-- Mi chiamo le props mandate dal figlio Lista dei progetti -->
        <ProjectList :projects="projects" />
    </div>
</template>

<style scoped></style>
