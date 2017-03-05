<template>
  <div>
    <text>login...</text>
    <button type="primary" value="登录" @click="login"></button>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>

<script type="text/ecmascript-6">
  import Button from '../components/Button.vue'
  export default {
    data () {
      return {}
    },
    methods: {
      login () {
        console.log('login...')
      }
    },
    components: {
      Button
    }
  }
</script>
