<template>
  <div class="wrapper" @click="update">
    <image :src="logoUrl" class="logo"></image>
    <text class="title">Hello {{target}}</text>
    <text class="subtitle">Hello, stylus!</text>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
  .wrapper
    align-items center
    margin-top: 120px

  .title
    font-size: 48px

  .logo
    width: 268px
    height: 88px

  .subtitle
    font-size: 40px
    color: #cdcdcd

</style>

<script>
  export default {
    data: {
      logoUrl: 'http://mat1.gtimg.com/www/images/qq2012/qqlogo_2x.png',
      target: 'World'
    },
    methods: {
      update: function (e) {
        this.target = 'Weex'
        console.log('target:', this.target)
      }
    }
  }
</script>
