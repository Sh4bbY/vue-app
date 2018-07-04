<template>
  <div id="app">
    <img src="./assets/logo.png">
    <LocalComponent/>
    <VueComponent/>
    <VueClassComponent/>
    <!--<HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {HelloWorld, LocalComponent} from './components';
//@ts-ignore
import {VueComponent, VueClassComponent} from 'vue-lib';

@Component({
  components: {
    HelloWorld,
    LocalComponent,
    VueComponent,
    VueClassComponent
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
