<template>
  <div> 
    <Map />
  </div>
</template>

<script>
import metaTags from "../mixins/metaTags";

export default {

  mixins: [metaTags],
  
  async asyncData({ app, $kirby }) {
    const { json: page } = await $kirby.find({
      "query": "page('kontakt')"
    }, 'de')
    return { page }
  }
}
</script>