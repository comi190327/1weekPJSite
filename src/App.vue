<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import What from './components/What.vue'
import Schedule from './components/Schedule.vue';
import Media from './components/Media.vue'
import List from './components/List.vue'
import { inject, ref } from 'vue'
// smoothScroll用
const myEl =ref(null)
const smoothScroll = inject('smoothScroll')
const scrollToMyEl = () => {
  smoothScroll({
    scrollTo: myEl.value,
    hash: '#sampleHash'
  })
}
</script>

<template>
  <div id="app">
    <Header id="header"></Header>
    <!--
    <div class="res"><h1 class="res-title" @aclick="clickSmoothScroll('#app')">1week開発PJ</h1></div>
    <div class="nav-res">
      <a href="#" class="link-content"  @aclick="clickSmoothScroll('#app')">
        <fa :icon="{ prefix: 'fas', iconName: 'circle-question' }" class="web-icon github"/>
      </a>
    </div>
    -->

  <What />
  <List />
  <Schedule />
  <Media />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=DotGothic16&display=swap');
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'DotGothic16', sans-serif; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
