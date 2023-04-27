<script>
export default {
    name: "AppHeader",

    props: {
        title: String,
    }
};
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container">
            <span class="navbar-brand mb-0 h1">{{ title }}</span>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link :to="{ name: 'home' }" class="nav-link">Homepage</router-link>
                    <router-link :to="{ name: 'contacts' }" class="nav-link">Contacts</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.link-route {
    gap: 2rem;
}
</style>