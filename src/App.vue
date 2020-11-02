<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'App',
  setup () {
    const name = ref('muchjoy')
    return {
      name
    }
  }
}
</script>

<style lang="less">
</style>
