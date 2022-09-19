<template>
  <main id="content">
    <div class="text_box">
      <Subnavigation />
      <NuxtChild :key="$route.params.slug" />
    </div>
    <div class="image_box">
      <InfoBlock />
      <SubpagePosts />
    </div>
  </main>
</template>


<script>
import metaTags from "../mixins/metaTags";

export default {
  mixins: [metaTags],
  
  async asyncData({ app, $kirby }) {
    const { json: page } = await $kirby.find({
      "query": "page('dienstleistungen')"
    }, 'de')
    return { page }
  },
}
</script>

<style lang="scss" scoped>
    @use "dienstleistungen";
</style>
