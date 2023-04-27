<script>
export default {
    name: "AppPagination",
    props: {
        pages: Array,
    },
};
</script>

<template>
    <!-- paginazione -->
    <nav aria-label="Page navigation">
        <ul class="pagination">
            <li class="page-item" v-for="page in pages">
                <button type="button" class="page-link" v-on:click="$emit('changePage', page.url)"
                    v-bind:class="{ disabled: !page.url, active: page.active }" v-html="page.label"></button>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped></style>