<script>
// COMPONENTS
import ProjectList from "../components/ProjectList.vue";

export default {
    name: "ProjectListPage",
    components: {
        ProjectList,
    },
};
</script>

<template>
    <ProjectList type="most_recent"></ProjectList>
</template>

<style lang="scss" scoped></style>
