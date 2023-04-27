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
            projects: {
                list: [],
                pagination: [],
            },
        };
    },

    methods: {
        fetchProjects(endpoint = null) {

            if (!endpoint) endpoint = 'http://127.0.0.1:8002/api/projects';
            axios
                .get(endpoint)
                .then((response) => {
                    this.projects.list = response.data.data;
                    this.projects.pagination = response.data.links;

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
        <ProjectList :projects="projects.list" :pagination="projects.pagination" @changePage="fetchProjects" />
    </div>
</template>

<style scoped></style>
