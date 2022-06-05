<script setup>
import { inject, ref } from 'vue'
import Nav from './Nav.vue'

const myEl = ref(null)
const smoothScroll = inject('smoothScroll')
const scrollToMyEl = () => {
    smoothScroll ({
        scrollTo: myEl.value,
        hash: '#sampleHash'
    })
}

</script>


<template>
    <div class="header">
        <div class="header-inner">
            <a href="#app" class="hp-title" v-smooth-scroll>1week開発PJ</a>
            <Nav class="nav"></Nav>
        </div>
    </div>
</template>

<style scoped>
.header {
    background-color: brown;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 1;
}

.header-inner {
    margin-left: 5%;
    margin-right: 5%;
    display: flex;
}

.hp-title {
    position: relative;
    display: inline-block;
    font-weight: bold;
    padding: 0.25em 10px;
    text-decoration: none;
    margin-right: 10px;
    margin-left: 10px;
    outline: none;
    color: whitesmoke;
    font-size: x-large;
}

.nav {
    margin: auto;
    margin-right: 0;
    padding: auto;
}
</style>