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
  margin: 0;
  font-size: 14px;
}
</style>
