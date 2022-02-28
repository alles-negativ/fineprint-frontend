<template>
  <div class="header__margin">
    <div class="line"></div>
    <div :class="{ 'home': $route.name === 'index' }" class="spacer">
      <vueHeadroom>
        <header>
          <div class="header__wrapper">
            <div class="header">
              <Navigation />
            </div>
          </div>
        </header>
      </vueHeadroom>
    </div>
    <div v-bind:class="{ 'isActive': this.cookie }" class="cookie_spacer"></div>
  </div>
</template>

<script>

export default {
  name: 'Header',

  data() {
    return {
      cookie: false
    }
  },
  methods: {
    updateCookie(e) {
      this.cookie = e;
      console.log(e);
    },
  }
}
</script>

<style lang="scss" scoped>
    @use "Header";
</style>