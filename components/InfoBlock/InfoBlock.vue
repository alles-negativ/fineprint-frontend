<template>
  <div class="info" v-if="info != []"> 
        <h3>Wir beantworten Ihnen gerne alle weiteren Fragen:</h3>
        <br>
        <h3><a v-if="info.phone != undefined" :href="'tel:' + info.phone.replace(/\s+/g, '')">{{ info.phone }}</a></h3>
        <h3><a :href="'mailto:' + info.email">{{ info.email }}</a></h3>
      </div>
</template>

<script>
export default {
    name: 'InfoBlock',

    data() {
        return {
            info: []
        }
    },
    async fetch() {
        const { json: data } = await this.$kirby.find({
            "query": "page('kontakt')",
            "select": {
                "email": true,
                "phone": true,
            }
        }, 'de')
        this.info = data
    }
}
</script>

<style lang="scss" scoped>
  @use "InfoBlock";
</style>