<template>
    <div class="Schedule" id="Schedule">
        <h1 class="title"><img class=icon :src="icon" />Streeming Schedule</h1>
        <p>
            <ul>
                <li><del>5/23(Mon)15:00~</del>done!!</li>
                <li><del>5/26(Thu)23:30~</del>done!!</li>
                <li>6/2(Thu)15:00~</li> and more!!
            </ul>
        </p>
    </div>
</template>

<script>
import Icon from '../assets/icon_comi_1.png'

export default {
    data () {
        return {
            icon: Icon
        }
    }
}
</script>

<style>
.Schedule {
    /* display: inline-flex; */
    padding-left: 5%;
    padding-right: 5%;
}

.title {

}

.icon {
    width: 1.5em;
    height: 1.5em;
    margin: 5px;
    vertical-align: bottom;
}

@media screen and (max-width: 768px) {
    .Schedule {
        flex-direction: column;
    }
}
</style>