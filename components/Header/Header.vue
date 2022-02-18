<template>
  <div :class="{ 'home': $route.name === 'index' }" class="spacer">
    <div class="header__wrapper">
      <CookieBox />
      <div class="line"></div>
      <div class="header">
        <Navigation />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss" scoped>
    @use "Header";
</style>