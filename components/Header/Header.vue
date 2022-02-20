<template>
  <div>
    <div :class="{ 'home': $route.name === 'index' }" class="spacer">
      <div class="header__wrapper">
        <CookieBox @cookie="updateCookie"></CookieBox>
        <div class="line"></div>
        <div class="header">
          <Navigation />
        </div>
      </div>
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