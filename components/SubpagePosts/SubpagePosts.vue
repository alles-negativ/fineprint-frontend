<template>
    <div class="gallery_wrapper">
        <no-ssr>
            <Flickity ref="flickity" :options="flickityOptions">
                <div v-for="element in data.images" :key="element.id">
                    <nuxt-img class="image" :src="element.url" :alt="element.alt" />
                </div>
            </Flickity>
        </no-ssr>
    </div>
</template>

<script>
export default {
    name: 'SubpagePosts',

    data() {
        return {
            data: [],
            flickityOptions: {
                draggable: false,
                initialIndex: 0,
                prevNextButtons: false,
                arrowShape: {},
                pageDots: false,
                wrapAround: false,
                autoPlay: 3000,
                pauseAutoPlayOnHover: false,
                fade: true,
                imagesLoaded: true,
                selectedAttraction: 0.01,
                setGallerySize: false,
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