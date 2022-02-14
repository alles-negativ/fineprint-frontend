<template>
  <main id="content">
    <div class="text_box">
      <Subnavigation />
      <!-- <h1>{{ page.content.contenttitle }}</h1>
      <div v-html="page.content.contenttext"></div> -->
      <!-- <SubpagePosts /> -->
      <NuxtChild :key="$route.params.slug" />
      <!-- <Footer /> -->
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
@use "assets/css/main/colors" as *;
@use "assets/css/main/breakpoints" as *;
@use "assets/css/main/main" as *;

#content {
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  
  @include mobile {
    flex-wrap: wrap;
  }
}

.text_box {
  width: 350px;
  position: absolute;
  top: 0;
  left: 0;
  padding-bottom: 60px;

  @include mobile {
    position: relative;
    width: 100%;
    padding-bottom: 20px;
  }
}

.image_box{
  position: fixed;
  margin-left: calc(350px + 40px);
  width: calc(100% - 14em - 350px - 40px);

  @include mobile {
    position: relative;
    margin-left: 0;
    width: calc(100%);
    margin: 40px 0;
  }
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

  @include mobile {
    position: relative;
    width: 80%;
    bottom: unset;
    left: unset;
    margin: 0 auto;
    margin-bottom: -100px;
  }
}
</style>
