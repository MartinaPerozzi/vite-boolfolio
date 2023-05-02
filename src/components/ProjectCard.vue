<script>
export default {
    name: "ProjectCard",

    props: {
        // Definisco le props che dovrà ricevere dal genitore LISTA PROGETTI
        project: Object,
        isDetail: Boolean,
    }
};
</script>

<template>
    <div class="col">
        <div class="card">
            <img :src="project.image" class="card-img-top" :alt="project.title">
            <ul class="list-group list-group-flush">

                <!-- <li class="mt-3 ms-3"><span v-if="project.type" class="badge p-2"
                        :style="{ backgroundColor: project.type.color }">{{
                            project.type.label }}</span>
                    <hr>
                </li> -->

                <li class="mt-2 ms-2"><router-link v-if="project.type" class="dinamic-bdg badge p-2"
                        :to="{ name: 'type_projects', params: { 'type_id': project.type_id } }"
                        :style="{ backgroundColor: project.type.color }">{{
                            project.type.label }}</router-link>
                </li>
                <hr>

                <li class="mt-3">
                    <!-- Badge prendi il colore dall'API- ciclo per le tecnologie -->
                    <span v-if="project.technologies.length" class="rounded-pill p-2 ms-3"
                        v-for="technology in project.technologies" :key="technology.id" v-html="technology.label"
                        :style="{ backgroundColor: technology.color }"></span>
                    <hr>
                </li>
                <li class="list-group-item mt-3">{{ project.created_at }}</li>
            </ul>
            <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text">{{ project.text }}</p>
            </div>
            <div class="card-body">
                <router-link v-if="!isDetail" class="btn btn-primary btn-sm"
                    :to="{ name: 'project-detail', params: { slug: project.slug } }">
                    Scopri
                </router-link>
                <router-link v-if="isDetail" class="btn btn-primary btn-sm" :to="{ name: 'projects' }">
                    Go Back
                </router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    img {
        max-height: 300px;
        object-fit: cover;
    }

    li {
        list-style-type: none;
        margin-left: 0rem;
    }

    .dinamic-bdg {
        text-decoration: none;

        &:hover {
            color: rgb(255, 251, 240);

        }
    }

    margin-bottom: 2rem;
}

.card-body {
    min-height: 112px;
}
</style>