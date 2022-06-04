<script>
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
  <div>
    <a href="#" class="nav-button" @click="clickSmoothScroll('#What')">What</a>
    <a href="#" class="nav-button" @click="clickSmoothScroll('#List')">List</a>
    <a href="#" class="nav-button" @click="clickSmoothScroll('#Schedule')">Schedule</a>
    <a href="#" class="nav-button" @click="clickSmoothScroll('#Media')">Media</a>
  </div>
</template>

<style scoped>
  .nav-button {
    position: relative;
    display: inline-block;
    font-weight: bold;
    padding: 0.25em 10px;
    text-decoration: none;
    margin-right: 10px;
    margin-left: 10px;
    outline: none;
    color: whitesmoke;
  }

  .nav-button:before {
    position: absolute;
    content: '';
    width: 100%;
    height: 1px;
    top: 100px;
    left: 0;
    border-radius: 0.5px;
    background: whitesmoke;
    transition: .3s;
  }

  .nav-button:hover:before {
    top: -webkit-calc(100% -3px);
    top: calc(100% -3px);
  }
</style>