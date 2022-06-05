<template>
    <div class="What" id="What">
        <h1 class="title"><img class=icon :src="icon" />What's 1week開発PJ？</h1>
        <p>
            「1週間でデザインから開発まで」「完了してもしなくても1週間で終了」を軸に行う個人開発プロジェクトです。<br>
            開発テーマは随時募集しています。<br>
            目標は
            <ul>
                <li>システムエンジニアの仕事を知って貰う</li>
                <li>システムエンジニアやプログラミングに興味を持って貰う</li>
                <li>新しい仕事をゲットする</li>
            </ul>ことです！
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
.What {
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
    .What {
        flex-direction: column;
    }
}
</style>