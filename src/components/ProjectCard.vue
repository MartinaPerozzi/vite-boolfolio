<script>
export default {
    name: "AppHeader",

    props: {
        // Definisco le props che dovrà ricevere dal gentiore LISTA PROGETTI
        project: Object,
    }
};
</script>

<template>
    <div class="col">
        <div class="card" style="width: 18rem;">
            <img :src="project.image" class="card-img-top" :alt="project.title">
            <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text">{{ project.text }}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li>{{ project.type.label }}</li>
                <li>
                    <span v-for="technology in project.technologies" v-html="technology.label + ' '"></span>
                </li>
                <li class="list-group-item">{{ project.created_at }}</li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>