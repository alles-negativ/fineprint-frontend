<template>
  <main id="content">
    <People />
    <Footer />
  </main>
</template>

<script>
import metaTags from "../mixins/metaTags";

export default {
  mixins: [metaTags],
  
  async asyncData({ app, $kirby }) {
    const { json: page } = await $kirby.find({
      "query": "page('team')"
    }, 'de')
    return { page }
  } 
}
</script>

<style lang="scss" scoped>

</style>
