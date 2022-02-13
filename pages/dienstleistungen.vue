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
      <div class="info"> 
        <h3>Wir beantworten Ihnen gerne alle weiteren Fragen:</h3>
        <br>
        <h3>+41 44 388 70 90</h3>
        <h3>info@fineprintag.ch</h3>
      </div>
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
  },
}
</script>

<style lang="scss" scoped>
#content {
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
}

.text_box {
  width: 350px;
  position: absolute;
  top: 0;
  left: 0;
}

.image_box{
  position: fixed;
  margin-left: calc(350px + 40px);
  width: calc(100% - 14em - 350px - 40px);
}

.info {
  background: rgba(0, 80, 236, 0.8);
  position: absolute;
  bottom: 30px;
  left: 30px;
  z-index: 100;
  color: white;
  padding: 40px;
  max-width: 400px;
  
  h3 {
    font-size: 23px;
  }
}
</style>
