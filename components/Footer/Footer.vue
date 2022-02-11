<template>
  <footer>
    <div class="container">
      <div class="line"></div>
      <p class="title">Kontakt</p>
      <div class="contact">
        <p>{{ footer.email }}</p>
        <p>{{ footer.phone }}</p>
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