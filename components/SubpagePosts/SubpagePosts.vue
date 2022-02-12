<template>
    <div class="gallery_wrapper">
        <Flickity ref="flickity" :options="flickityOptions">
            <div v-for="element in data.images" :key="element.id">
                <nuxt-img class="image" :src="element.url" :alt="element.alt" />
            </div>
        </Flickity>
        <!-- <Accordion>
            <template v-slot:title>
            <h3 class="title"> {{ element.title }} </h3>
            </template>
            <template v-slot:body>
            <div class="text__big" slot="introtext" v-html="element.introtext"></div>
            <div class="text" slot="contenttext" v-html="element.contenttext"></div>
            <div class="image" slot="image">
                <nuxt-img class="image image__img" :src="element.images[0].url" :alt="element.images[0].alt" />
            </div>
            </template>
        </Accordion> -->
    </div>
</template>

<script>
export default {
    name: 'SubpagePosts',

    data() {
        return {
            data: [],
            flickityOptions: {
                initialIndex: 0,
                prevNextButtons: false,
                pageDots: true,
                wrapAround: true,
                autoPlay: 2000,
                pauseAutoPlayOnHover: false,
                selectedAttraction: 0.01
        }
        }
    },
    async fetch() {
        const { json: data } = await this.$kirby.find({
            "query": "page('dienstleistungen')",
            "select": {
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
        this.data = data
    },
}
</script>

<style lang="scss" scoped>
    @use "SubpagePosts";
</style>