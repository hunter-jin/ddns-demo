<template>
  <div>
    <text>welcome, {{loggedUser.userName}}</text>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {}
    },
    computed: {
      ...mapGetters(['loggedUser'])
    }
  }
</script>
