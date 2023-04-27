<script>
export default {
    name: "AppHeader",

    props: {
        title: String,
    }
};
</script>

<template>
    <nav class="navbar navbar-dark bg-dark">
        <div class="container">
            <span class="navbar-brand mb-0 h1">{{ title }}</span>
            <div class="link-route d-flex text-white">
                <router-link :to="{ name: 'home' }" class="nav-link">Homepage</router-link>
                <router-link :to="{ name: 'contacts' }" class="nav-link">Contacts</router-link>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.link-route {
    gap: 2rem;
}
</style>