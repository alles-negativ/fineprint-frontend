<template>
    <div class="subnavigation"> 
        <ul class="container">
            <li v-for="element in data" :key="element.id" class="elements">
                <nuxt-link :to="'/dienstleistungen/' + element.slug">
                        <p class="text">{{ element.title }}</p>
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'People',

    data() {
        return {
            data: [],
        }
    },
    async fetch() {
        const { json: data } = await this.$kirby.find({
            "query": "page('dienstleistungen').children",
            "select": {
                "title": true,
                "slug": true,
            }
        }, 'de')
        this.data = data
    },
}
</script>

<style lang="scss" scoped>
    @use "Subnavigation";
</style>