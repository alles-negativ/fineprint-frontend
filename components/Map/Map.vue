<template>
    <div class="content_wrapper">
        <div class="textbox">
            <div class="welcome_text" v-html="contact.text"></div>
            <a v-if="contact.phone != undefined" class="text" :href="'tel:' + contact.phone.replace(/\s+/g, '')">
                <h3>{{ contact.phone }}</h3>
            </a>
            <a class="text" :href="'mailto:' + contact.email">
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
