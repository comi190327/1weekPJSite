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
    <a href="#What" class="nav-button" v-smooth-scroll>What</a>
    <a href="#List" class="nav-button" v-smooth-scroll>List</a>
    <a href="#Schedule" class="nav-button" v-smooth-scroll>Schedule</a>
    <a href="#Media" class="nav-button" v-smooth-scroll>Media</a>
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

  
  .nav-button::before, .nav-button::after {
    border-bottom: solid 2px whitesmoke;
    bottom: 0;
    content: '';
    display: block;
    position: absolute;
    transition: all .3s ease;
    -webkit-transition: all .3s ease;
  }

  .nav-button::before{
    left: 50%;
  }

  nav-button::after  {
    right: 50%;
  }

  .nav-button:hover:after, .nav-button:hover:after {
    width: 50%;

  }
</style>