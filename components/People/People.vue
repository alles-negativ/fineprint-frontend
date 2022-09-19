<template>
    <div class="container"> 
        <ul class="container__columns">
            <li v-for="article in articles" :key="article.id" class="content">
                <div class="sticky">
                    <nuxt-img :src="article.images[0].url" :alt="article.images[0].alt" />
                    <div class="box">
                        <h2>{{ article.title }}</h2>
                        <p class="text__medium">{{ article.email }}</p>
                        <p class="text__medium">{{ article.phone }}</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'People',

    data() {
        return {
            articles: [],
        }
    },
    async fetch() {
        const { json: data } = await this.$kirby.find({
            "query": "page('team').children",
            "select": {
                "title": true,
                "email": true,
                "phone": true,
                "contentimage": true,
                "images": {
                    "query": 'page.files',
                    "select": {
                        "name": true,
                        "url": true,
                        "alt": true
                    }
                }
            }
        }, 'de')
        this.articles = data
    },
}
</script>

<style lang="scss" scoped>
    @use "People";
</style>