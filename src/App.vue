<script>
// COMPONENTS
import AppHeader from "./components/AppHeader.vue";
import ProjectCard from './components/ProjectCard.vue';
import ProjectList from './components/ProjectList.vue';
import axios from "axios";


// EXPORT
export default {
  components: {
    AppHeader,
    ProjectCard,
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
  <AppHeader />
  <div class="container mt-5">
    <!-- Mi chiamo le props mandate dal figlio Lista dei progetti -->
    <ProjectList :projects="projects" />
  </div>
</template>

<style scoped></style>
