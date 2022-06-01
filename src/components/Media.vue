<template>
    <div class="Media">
        <h1 class="title"><img class=icon :src="icon" />Media</h1>
        <p>
            <div class="items">
                <div class="link">
                    <a href="https://www.youtube.com/channel/UCERzpud3HUtw10m9RsXPzHA" class="link-icon"><fa :icon="{ prefix: 'fab', iconName: 'youtube' }" class="web-icon youtube"/></a>
                    <a href="https://twitter.com/comiLABOch2" class="link-icon"><fa :icon="{ prefix: 'fab', iconName: 'twitter' }" class="web-icon twitter"/></a>
                    <a href="https://github.com/comi190327" class="link-icon"><fa :icon="{ prefix: 'fab', iconName: 'github' }" class="web-icon github"/></a>
                </div>
            </div>
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
.Media {
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

.items {
    text-align: left;
    margin-bottom: 50px;
}

.link {
    display: inline-flex;
    width: 30%;
    justify-content: flex-start;
}

.link-icon {
    margin:0 10px;
    margin-bottom: 20px;
}

.web-icon {
    font-size: 3em;
    background-color: white;
    padding: 0.3em;
    border-radius: 50%;
}

.web-icon:hover {
    color: white;
}

.youtube {
    color: #cd201f;
}

.youtube:hover {
    background-color: #cd201f;
}

.twitter {
    color: #55acee;
}

.twitter:hover {
    background-color: #55acee;
}

.github {
    color: #0e0c0d;
}

.github:hover {
     background-color: #0e0c0d;
}

@media screen and (max-width: 768px) {
    .What {
        flex-direction: column;
    }
}
</style>