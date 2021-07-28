<template>
    <div class ="movie">
        <div class =""></div>
                    <component :is="selected"></component>
        <div class ="bottom_navbar">
            <van-tabbar v-model="active">
                <van-tabbar-item icon="fire" @click="selection('neko_eyes')">电影</van-tabbar-item>
                <van-tabbar-item icon="live" @click="selection('cinema')">影院</van-tabbar-item>
                <van-tabbar-item icon="map-marked" @click="selection('mine')">我的</van-tabbar-item>
            </van-tabbar>
        </div>
    </div>
</template>

<script>
import neko_eyes from './movies/neko_eyes.vue'
import cinema from './movies/cinema.vue'
import mine from './movies/mine.vue'
export default {
    data() {
        return {
            active: 0,
            selected:'neko_eyes',
        };
    },
    methods:{
        selection:function(word){
            this.selected = word
        }
    },
    components:{
        neko_eyes,cinema,mine
    }
}
</script>

<style>

</style>