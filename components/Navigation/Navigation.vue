<template>
    <nav>
        <div class="nav">
            <ul>
                <li class="item" v-for="element in menu" :key="element.id">
                    <nuxt-link :to="'/' + element.slug">
                        <p class="text__menu">{{ element.title }}</p>
                    </nuxt-link>
                </li>
            </ul>
            <div class="logo">
                <nuxt-link :to="'/'">
                    <p class="text__menu">FINEPRINT</p>
                </nuxt-link>
            </div>
        </div>    
    </nav>
</template>

<script>
export default {
    name: 'Navigation',

    data() {
        return {
            menu: []
        }
    },
    async fetch() {
        const { json: data } = await this.$kirby.find({
            "query": "site.children",
            "select": {
                "title": true,
                "slug": true,
                "isHomePage": true,
                "isErrorPage": true,
                "status": true
            }
        }, 'de')

        const menu = []

        for (let i = 0; i < data.length; i++) {
            if (data[i].status == "listed" && !data[i].isHomePage) {    
                menu.push(data[i])
            }
        }

        this.menu = menu
    },
}
</script>
  
<style lang="scss" scoped>
    @use "Navigation";
</style>