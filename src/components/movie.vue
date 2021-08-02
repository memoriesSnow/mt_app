<template>
    <div class ="movie">
        <!-- <div class =""></div>
                    <component :is="selected"></component> -->
        <router-view/>
        <div class ="bottom_navbar">
            <van-tabbar v-model="active">
                <van-tabbar-item icon="fire" to="/neko_eyes">电影</van-tabbar-item>
                <van-tabbar-item icon="live" to="/cinema">影院</van-tabbar-item>
                <van-tabbar-item icon="map-marked" to="/mine">我的</van-tabbar-item>
            </van-tabbar>
        </div>
    </div>
</template>

<script>
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
}
</script>

<style>

</style>