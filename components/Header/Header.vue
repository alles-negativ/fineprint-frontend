<template>
  <div class="header__margin">
    <div class="line"></div>
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
</template>

<script>

export default {
  name: 'Header',
}
</script>

<style lang="scss" scoped>
    @use "Header";
</style>