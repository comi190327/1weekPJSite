<template>
    <div class="List" id="List">
        <h1 class="title"><img class=icon :src="icon" />List of Productions</h1>
            <ul class="Productions">
                <li class="card">
                    <img class="card-img" src="../assets/1week開発PJ_tmp.png" alt="">
                    <div class="card-content">
                        <h1 class="card-titile jp">1week開発PJサイト</h1>
                        <p class="card-text">このサイト</p>
                        <p class="card-lang">Language : JavaScript(Vue.js)</p>
                        <br>
                        <a href="https://github.com/comi190327/1weekPJSite" class="card-link github-link">Github</a>
                    </div>
                </li>
            </ul>               
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
.List {
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

.Productions {
    list-style-type: none;
    padding-left: 0;
    text-align: center;
    padding-left: 15%;
    padding-right: 15%;
}

.jp {
    font-weight: 100;
}

.card-lang {
    font-weight: 500;
}

.card {
    display: inline-block;
    margin: 30px 60px;
    width: 350px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px #ccc;
}

.card-img {
    border-radius: 5px 5px 0 0;
    width: 100%;
    height: 200px;
    object-fit: contain;
}

.card-content {
    padding: 20px;
}

.card-title {
    font-size: 20px;
    margin-bottom: 20px;
    text-align: center;
    color: #333;
}

.card-text {
    color: #777;
    font-size: 14px;
    line-height: 1.5;
}

.card-link {
    border: 2px solid #00aaff;
    text-decoration: none;
    color: #00aaff;
    margin: 0 10px;
    padding: 5px 10px;
    border-radius: 5px;
    transition: 0.4s;
    font-weight: bold;
}

.card-link:hover {
    background-color: #00aaff;
    color: white;
}

.github-link {
    border-color: #0e0c0d;
    color: #0e0c0d;
}

.github-link:hover {
    background-color: #0e0c0d;
    color: white;
}

@media screen and (max-width: 768px) {
    .Productions {
        padding-left: 1%;
        padding-right: 1%;
    }

    .card-link {
        border: 2px solid #00aaff;
        background-color: #00aaff;
        text-decoration: none;
        color: white;;
        margin: 0 10px;
        padding: 5px 10px;
        border-radius: 5px;
        font-weight: bold;
    }

    .github-link {
        background-color: #0e0c0d;
        border-color: #0e0c0d;
    }
}

@media screen and (max-width: 550px) {
    .card {
        width: 280px;
        margin: 30px 0;
    }
}

</style>