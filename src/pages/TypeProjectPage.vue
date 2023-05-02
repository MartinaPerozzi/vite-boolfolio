<script>
import ProjectList from '../components/ProjectList.vue';
export default {
    name: "TypeProjectPage",
    components: {
        ProjectList
    }
};
</script>

<template>
    <section class="container py-4">
        <ProjectList typeOfPage="by_type" />
    </section>
</template>

<style lang="scss" scoped></style>