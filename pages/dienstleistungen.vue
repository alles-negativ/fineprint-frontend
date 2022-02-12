<template>
  <main id="content">
    <div class="text_box">
      <Subnavigation />
      <!-- <h1>{{ page.content.contenttitle }}</h1>
      <div v-html="page.content.contenttext"></div> -->
      <!-- <SubpagePosts /> -->
      <NuxtChild :key="$route.params.slug" />
      <Footer />
    </div>
    <div class="image_box">
      <SubpagePosts />
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
#content {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.text_box {
  width:40%;
}

.image_box{
  width:60%;
}
</style>
