<template>
  <main id="content">
    <div class="text_box">
      <Subnavigation />
      <h1>{{ page.content.contenttitle }}</h1>
      <div v-html="page.content.contenttext"></div>
      <SubpagePosts />
      <Footer />
    </div>
    <div class="image_box">

    </div>
  </main>
</template>


<script>
import metaTags from "../mixins/metaTags";

export default {
  mixins: [metaTags],

  layout: 'nofooter',
  
  async asyncData({ app, $kirby }) {
    const { json: page } = await $kirby.find({
      "query": "page('dienstleistungen')"
    }, 'de')
    return { page }
  } 
}
</script>

<style lang="scss" scoped>
.text_box {
  width:40%;
}

.image_box{
  width:60%;
}
</style>
