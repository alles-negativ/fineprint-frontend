<template>
  <footer :class="{ 'home': $route.name === 'index' }">
    <div class="container">
      <div class="line"></div>
      <p class="title">Kontakt</p>
      <div class="contact" v-if="footer != []">
        <p>
          <a :href="'mailto:' + footer.email">{{ footer.email }}</a>
        </p>
        <p>
          <a v-if="footer.phone != undefined" :href="'tel:' + footer.phone.replace(/\s+/g, '')">{{ footer.phone }}</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
    name: 'Footer',

    data() {
        return {
            footer: []
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
        this.footer = data
    }
}
</script>

<style lang="scss" scoped>
  @use "Footer";
</style>