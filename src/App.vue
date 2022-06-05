<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import What from './components/What.vue'
import Schedule from './components/Schedule.vue';
import Media from './components/Media.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'
import { inject, ref } from 'vue'
// smoothScroll用
const myEl = ref(null)
const smoothScroll = inject('smoothScroll')
const scrollToMyEl = () => {
    smoothScroll ({
        scrollTo: myEl.value,
        hash: '#sampleHash'
    })
}
const show = ref(true)
</script>

<template>
  <div id="app">
    <Header id="header"></Header>
    <div class="res"><a href="#app" class="hp-title" v-smooth-scroll>1week開発PJ</a></div>
    <div class="nav-res">
      <a href="#What" class="link-content" v-smooth-scroll><fa icon="circle-question" /><p class="comment">What</p></a>
      <a href="#List" class="link-content" v-smooth-scroll><fa icon="code" /><p class="comment">List</p></a>
      <a href="#Schedule" class="link-content" v-smooth-scroll><fa icon="calendar-days" /><p class="comment">Schedule</p></a>
      <a href="#Media" class="link-content" v-smooth-scroll><fa icon="play" /><p class="comment">Media</p></a>
    </div>
    <div class="top" id="top">
      <div class="main" id="id">
        <Transition>
        <img src="./assets/top_img.png"><br>
        <p class="top-text">Thank you for visiting my site.<br>
        Keep scroll!<br>
        ↓
        </p>
        </Transition>
      </div>
    </div>
  <What />
  <List />
  <Schedule />
  <Media />
  <Footer></Footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DotGothic16&display=swap');
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'DotGothic16', sans-serif; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

#top {
  position: relative;
  text-align: center;
  font-size: x-large;
  background-color: #ffd700;
  background-size: cover;
  height: 110vh;
}

#top img {
  width: 80%;
  height: 80%;
  margin-left: 100px;
  margin-top: -5%;
  padding-bottom: 0%;
}

#main {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}

.res {
  display: none;
  background-color: brown;
}

.res-title {
  background-color: brown;
  padding: 10px;
  margin: 0;
  color: whitesmoke;
}

.nav-res {
  display: none;
}

.nav-icon {
  font-size: 1.5em;
}

.comment {
  margin: 5px 0;
  font-weight: 500;
  color: whitesmoke;
}

.link-content {
  color: whitesmoke;
  text-decoration: none;
  min-width: 8%;
  font-size: 10px;
  text-align: center;
}

.top-text {
  color: black;
  font-size: 40px;
}

@media screen and (max-width: 1200px) {
  .top-text {
    font-size: 35px;
  }
}

@media screen and (max-width: 768px) {
  .top-text {
    font-size: 25px;
  }
  
  #header {
    display: none;
  }

  .res{
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 1;
    background-color: brown;
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .res .hp-title {
    font-size: large;
    text-decoration: none;
    color: whitesmoke;
  }

  .nav-res {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 1;
    background-color: brown;
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    font-size: large;
  }

  .title {
    margin-bottom: 35px;
  }

  #top {
    height: 50vh;
  }

  #top img {
    width: 100%;
    height: 100%;
    margin: 0;
  }
}

@media screen and (max-width: 450px) {
  .hp-title {
    font-size: 20px;
  }
  
  .link-content {
    font-size: 15px;
  }
  
  .top-text{
    font-size: 20px;
  }
}

.v-leave-active,
.v-enter-active {
  transition: opacity 1s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
