<template>
  <div class ="neko_eyes">
      <van-sticky>
        <div class ="navbar">
            <van-nav-bar
                title="猫眼电影"
            />
        </div>
      </van-sticky>
      <van-sticky :offset-top="50">
        <div class ="tabbar">
                <div class ="tabbar_container">
                    <van-tabs v-model="active" sticky @click="change" line-width="1rem" :border="false">
                        <van-tab title="正在热映"></van-tab>
                        <van-tab title="即将上映"></van-tab>
                    </van-tabs>
                </div>
        </div>
      </van-sticky>
      <div class ="content">
          <hotPlay v-show="flag=='正在热映'"/>
          <willPlay v-show="flag=='即将上映'"/>
      </div>
  </div>
</template>

<script>
import hotPlay from './plays/hot_play.vue'
import willPlay from './plays/will_play.vue'
export default {
    data(){
        return{
            active:'',
            flag:'正在热映',
            movieList:[]
        }
    },
    components:{
        hotPlay,
        willPlay
    },
    methods:{
        change(name,title){
            this.flag = title;
            console.log(this.flag)
        },
    },
    mounted(){
    }
}
</script>

<style lang="less" scoped>
.navbar{
    height:.5rem;
    width:100%;
    @nav-bar-height:.5rem;
}
.tabbar{
    display:flex;
    justify-content: center;
    width:100%;
    background:#fff;
    .tabbar_container{
        width:2.1rem;
        background:blue;
    }
}
.content{
    width:100%;
}
/deep/.van-tab__text--ellipsis{
    font-size: .15rem;
    font-weight: 700;
}

</style>