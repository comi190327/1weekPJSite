<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import What from './components/What.vue'
import Schedule from './components/Schedule.vue';
import Media from './components/Media.vue'
</script>

<template>
  <What />
  <Schedule />
  <Media />
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
