<template>
    <div v-if="data != null">
        <h3>{{ data.content.title }}</h3>
        <div v-html="data.content.contenttext"></div>
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
            "query": "page('dienstleistungen')",
        }, 'de')
        this.data = data
    }
}
</script>

<style lang="scss" scoped>
h3 {
  margin-top: 40px;
  margin-bottom: 10px;
}
</style>