<template>
  <div class="home">Home</div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
  font-weight: bold;
}
</style>
