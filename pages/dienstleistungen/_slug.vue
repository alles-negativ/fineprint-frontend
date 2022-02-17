<template>
    <div v-if="data != null">
        <div class="container" v-for="element in JSON.parse(data.content.inhalt)" :key="element.id">
            <div class="textfield" v-if="element.type == 'text'" v-html="element.content.text"></div>
            <h3 v-if="element.type == 'heading'"> {{ element.content.text }}</h3>
            <Accordion v-if="element.type == 'accordion'">
                <template v-slot:title>
                    <h3 class="title"> {{ element.content.title }} </h3>
                </template>
                <template v-slot:body>
                    <div class="text" slot="contenttext" v-html="element.content.text"></div>
                </template>
            </Accordion>
        </div>
    </div>
</template>

<script>
export default {

    transition: {
        name: 'page',
        mode: 'out-in'
    },
    
    data() {
        return {
            data: null,
        }
    },
    async fetch() {
        const { json: data } = await this.$kirby.find({
            "query": "page('dienstleistungen/" + this.$route.params.slug + "')",
        }, 'de')
        this.data = data
    }
}
</script>

<style lang="scss" scoped>
h3 {
  margin-top: 40px;
  margin-bottom: 10px;
}
.container {

    .textfield {
        margin-top: 40px;
        line-height: 26px;
    }
}

  /* during entering and leaving : */
  .page-enter-active {
    transition: all 0.3s ease;
  }

  .page-leave-active {
    transition: all 0.1s ease;
  }

  /* entering start */  
  .page-enter {
    opacity: 0;
  }

  /* entering end */
  .page-enter-to {
    opacity: 1;
  }

  /* leaving start */
  .page-leave {
    opacity: 1;
  }

  /* leaving end */
  .page-leave-to {
    opacity: 0;
  }
</style>