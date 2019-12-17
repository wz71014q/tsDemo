import Vue from 'vue';
import App from './App.vue';

const app: Vue = new Vue({
  el: '#root',
  render: (h) => h(App), // eslint-disable-line
});

export default app;
