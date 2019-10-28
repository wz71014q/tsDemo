<template>
  <div>
    <Home></Home>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Home from './view/Home.vue';

@Component({
  name: "App",
  components: {
    Home
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
body {
  font-size: 14px;
  margin: 0;
}
</style>
