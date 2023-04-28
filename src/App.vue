<script>
// COMPONENTS
import AppHeader from "./components/AppHeader.vue";
// import ProjectCard from './components/ProjectCard.vue';
// import ProjectList from './components/ProjectList.vue';
import axios from "axios";


// EXPORT
export default {
  components: {
    AppHeader,
  },

  // emits: ["changePage"],

  data() {
    return {
      title: "Boolfolio",
      // projects: [
      //   // list: [],
      //   // pagination: [],
      // ],
    };
  },

  // methods: {
  //   fetchProjects() {

  //     axios
  //       .get('http://127.0.0.1:8002/api/projects')
  //       .then((response) => {
  //         this.projects = response.data;
  //         console.log(response.data);
  //       })
  //   },
  // },
  // created() {
  //   this.fetchProjects();
  // },
};

</script>

<template>
  <!-- Prop del titolo per header -->
  <AppHeader :title="title" />
  <div class="container mt-5">
    <!-- <ProjectList :projects="projects" /> spostato tutto in HomePage-->
    <router-view></router-view>
  </div>
</template>

<style></style>
