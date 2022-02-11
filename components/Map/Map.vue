<template>
    <div class="content_wrapper">
        <div class="textbox">
            <a class="text" href="#">
                <h3>{{ contact.phone }}</h3>
            </a>
            <a class="text" href="#">
                <h3>{{ contact.email }}</h3>
            </a>
            <div class="adress" v-html="contact.adress"></div>
        </div>
        <div class="map" v-html="contact.mapframe"></div>
    </div>
</template>

<script>
export default {
    name: 'Map',

    data() {
        return {
            contact: []
        }
    },
    async fetch() {
        const { json: data } = await this.$kirby.find({
            "query": "page('kontakt')"
        }, 'de')
        this.contact = data.content
    }
}
</script>

<style lang="scss" scoped>
  @use "Map";
</style>
