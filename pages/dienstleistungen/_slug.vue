<template>
    <div v-if="data != null">
        <div class="container" v-for="element in JSON.parse(data.content.inhalt)" :key="element.id">
            <div class="textfield" v-if="element.type == 'text'" v-html="element.content.text"></div>
            <h3 v-if="element.type == 'heading'"> {{ element.content.text }}</h3>
            <Accordion v-if="element.type == 'accordion'">
                <template v-slot:title>
                    <h3 class="title"> {{ element.content.title }} </h3>
                </template>
                <template v-slot:body>
                    <div class="text" slot="contenttext" v-html="element.content.text"></div>
                </template>
            </Accordion>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: null,
        }
    },
    async fetch() {
        const { json: data } = await this.$kirby.find({
            "query": "page('dienstleistungen/" + this.$route.params.slug + "')",
        }, 'de')
        this.data = data
    }
}
</script>

<style lang="scss" scoped>
    @use "dlslug";
</style>