<template>
  <div class ="guesslike">
        <p class ="title">猜你喜欢</p>
        <div class ="like_item">
            <div class ="dealcard" v-for="(item,index) in dataList" :key ="index">
                <div class ="img_box">
                    <img class ="item_img" :src ="item.img"/>
                </div>
                <div class ="dealcard_block">
                    <div class ="item_name">{{ item.title }}</div>
                    <div class ="item_title">{{ item.content }}</div>
                    <div class ="item_price">
                        <div class ="price_left">
                            <span class ="price">{{ item.price }}</span>
                            <!-- <span class ="strong">元</span> -->
                            <span class ="stand">门市价</span>
                            <span class ="market_price">{{ item.retail_price }}</span>
                        </div>
                        <div class ="price_right">
                            已售{{ item.sold_out }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import { listObj } from '../server/index.js'
export default {
    data(){
        return{
            dataList:[]
        }
    },
    methods:{
        guesslikeData(){
            listObj.getGuesslike().then(res=>{
                console.log(res);
                this.dataList = res;
            })
        }
    },
    mounted(){
        this.guesslikeData();
    }
}
</script>

<style lang ="less" scoped>
.guesslike{
    padding:0 .1rem;
    background:#fff;
    border-bottom: 1px solid #DDD8CE;
}
.title{
    padding:.12rem 0;
    font-size:.17rem;
    text-align: left;
    border-bottom:0.5px solid #DDD;
}
.like_item{
    border-bottom: 1px solid #DDD8CE;
    padding:.1rem 0;
    .dealcard{
        display:flex;
        padding:.12rem 0;
        .img_box{
            width: 0.9rem;
            height: 0.82rem;
            background:#afc;
            .item_img{
                width:inherit;
                height:inherit;
            }
        }
        .dealcard_block{
            margin-left:.1rem;
            text-align:left;
            width:2.65rem;  
            .item_name{
                    padding-top: .05rem;
                    margin-bottom: .06rem;
                    font-size: .15rem;
                    font-weight: 400;
                    color: #333;
                    
            }
            .item_title{
                font-size: .12rem;
                height: .34rem;
                margin-bottom: .08rem;
                color: #666;
                text-overflow: ellipsis;
            }
        }
    }
}
.item_price{
    /* position: absolute; */
    width: 100%;
    display:flex;
    justify-content: space-between;
    /* bottom: 0; */
    .price_left{
        display:flex;
        align-items: flex-end;
        .price{
            font-size: .18rem;
            color: #F60;
            margin-right:.05rem;
        }
        .strong{
            font-size: .12rem;
            color: #F60;
        }
        .stand{
            font-size: .12rem
        }
        .market_price{
            font-size: .12rem
        }
    }
    .price_right{
        font-size: .12rem;
        display:flex;
        align-items:flex-end;
    }
}
</style>