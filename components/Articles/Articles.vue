<template>
    <div class="container"> 
        <ul class="container__columns">
            <li v-for="article in articles" :key="article.id" class="content">
                <nuxt-img :src="article.images[0].url" :alt="article.images[0].alt" />
                <div class="teaser__box">
                    <div class="text__small" v-html="article.title"></div>
                    <h3>{{ article.contenttitle }}</h3>
                    <div class="text__small" v-html="article.contenttext"></div>
                </div>
                <span v-if="article.subtext != ''" class="subtext" v-html="article.subtext"></span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Articles',

    data() {
        return {
            articles: [],
        }
    },
    async fetch() {
        const { json: data } = await this.$kirby.find({
            "query": "page('home').children",
            "select": {
                "title": true,
                "date": true,
                "contenttitle": true,
                "contenttext": true,
                "subtext": true,
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
    @use "Articles";
</style>