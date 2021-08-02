<template>
  <div class="food_detail">
    <header class="nav_bar">
      <div class="nav_left">
        <div class="icon_container">
          <i class="text-icon"></i>
        </div>
      </div>
      <div class="nav_title">
          商家详情
      </div>
      <div class="nav_right">
          <a herf="#">
              <span class ="nav-btn">
                  <i class ="text-icon icon-collect"></i>收藏
              </span>
          </a>
          <a herf="#">
              <span class ="nav-btn">
                  <i class ="text-icon icon-menu"></i>导航
              </span>
          </a>
      </div>
    </header>
    <div class ="content-wrapper">
        <div class ="banner-download">
            <div class ="imgBox">
                <img src="//s1.meituan.net/bs/file?f=meis/meishi.mobile:img/app_download_banner.png@55fea13"/>
            </div>
        </div>
        <div class ="poi-detail-wrap" v-for="item in foodInfo" :key="item.id">
            <div class ="block-top">
                <div class ="imgBox">
                    <img :src="item.img">
                </div>
                <div class ="poiinfo-wrap">
                    <div class ="name">
                        <p class ="poi-brand">{{ item.title }}</p>
                        <div class ="poi-score">
                            <span class="score">
                                <div class ="star-container">
                                    <van-rate
                                        v-model="item.rank"
                                        size=".14rem"
                                        color="#FF4B10"
                                        void-icon="star"
                                        void-color="#eee"
                                        gutter=".01rem"
                                        allow-half
                                        readonly
                                    />
                                </div>
                                <div class ="star-text">{{ item.rank }}</div>
                            </span>
                            <span class="avg-price">人均：{{ item.price }}</span>
                        </div>
                    </div>
                    <div class ="address">
                        <a href="" class ="link">
                            <i class ="icon-location"></i>
                            <div class ="poi-address">{{ item.address }}</div>
                        </a>
                        <p class ="phone"> 
                            <a class ="poi-phone">
                                <i class ="icon-tel"></i>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div class ="voucher-deal">
                <div class ="block-container">
                    <p class="block-title">
                        <i class ="icon-tuan"></i>团购（18）
                    </p>
                    <div class ="deal-list-component">
                        <div class ="items" v-for="item1 in item.tuangou" :key="item1.sold_out">
                            <div class ="imgBox">
                                <img :src="item1.img"/>
                            </div>
                            <div class ="contentBox">
                                <div class ="deal-title">{{ item1.content }}</div>
                                <div class ="deal-info-line">
                                    <span class ="deal-price">
                                        <b>{{ item1.price }}</b>元
                                    </span>
                                    <span class ="deal-origin-price">
                                        门市价：{{ item1.retail_price }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { listObj } from '@/server/index.js'
export default {
    data(){
        return{
            foodInfo:[],
            parmas:this.$route.query.id,
        }
    },
    methods:{
        getFoodsInfo(id){
            listObj.getFoodDetail(id).then(res=>{
                console.log(res);
                this.foodInfo = res;
            })
        }
    },
    created(){
        console.log(this.parmas * 1)
        this.getFoodsInfo(this.parmas *1)
    }
};
</script>

<style lang="less" scoped>
.food_detail{
    background:#f0f0f0;
}
.nav_bar {
  height: 0.51rem;
  color: #000000;
  background: #ffd614;
  border-bottom: 1px solid #ffd614;
  display: flex;
  position: relative;
  z-index: 30;
  width: 100%;
}
.nav_left {
  height: 0.5rem;
  line-height: 0.5rem;
  width: 0.525rem;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  .icon_container {
    display: block;
    height: 0.5rem;
    // height:100%;
    line-height: 0.5rem;
    padding: 0 0.15rem;
    display: flex;
    align-items: center;
    .text-icon {
      display: flex;
      width: 0.225rem;
      height: 0.225rem;
      vertical-align: middle;
      position: relative;
    }
    .text-icon:after {
      content: "";
      display: block;
      position: absolute;
      left: 0.04rem;
      top: 0.06rem;
      width: 0.1rem;
      height: 0.1rem;
      border-bottom: 0.02rem solid #000;
      border-left: 0.02rem solid #000;
      transform: scaleY(0.8) rotateZ(45deg);
    }
  }
}
.nav_title{
    display: block;
    flex: 1;
    font-size: 0.18rem;
    font-weight: 400;
    text-align: center;
    line-height: .5rem;
    margin: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.nav_right{
    width:.96rem;
    display:flex;
    a{
        display: flex;
        height: 100%;
        line-height: .5rem;
        text-align: center;
        width: 0.47rem;
        justify-content: center;
        align-items: center;
        .nav-btn{
            display: inline-block;
            font-size: 0.1rem;
            line-height: 1;
            vertical-align: middle;
            text-align: center;
            color: #000;
            .text-icon{
                display: block;
                margin: auto;
                margin-bottom: 0.05rem;
            }
            .icon-collect{
                background-image: url(http://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/2573a00be5d4e6d4.png@55fea13);
                background-position: -0.44rem 0rem;
                width: 0.2rem;
                height: 0.2rem;
                background-size: .81rem .78rem;
            }
            .icon-menu{
                background-image: url(http://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/2573a00be5d4e6d4.png@55fea13);
                background-position: -.22rem -.22rem;
                width: 0.2rem;
                height: 0.2rem;
                background-size: .81rem .78rem;
            }
        }
    }
}
.content-wrapper{
    width:100%;
    min-height:8rem;
}
.banner-download{
    position: relative;
    min-height: .93rem;
    .imgBox{
        width: 100%;
        height: 1.1rem;
        img{
            width:100%;
            height:100%
        }
    }
}
.block-top{
    background: #fff;
    .imgBox{
        width:100%;
        height:1.6rem;
        img{
            width:100%;
            height:100%;
        }
    }
    .poiinfo-wrap{
        margin-left:.1rem;
    }
}
.name{
    margin: 0;
    border-bottom: 1px solid #ddd8ce;
    overflow: hidden;
    font-size: inherit;
    font-weight: 400;
    position: relative;
    height: .62rem;
    .poi-brand{
        margin: 0.1rem .5rem 0.075rem 0;
        color: #333;
        font-size: 0.16rem;
        font-weight: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .poi-score{
        margin-bottom: 0.1rem;
        display: flex;
        .score{
            font-size:.135rem;
            color:#FF4B10;
            display:flex;
            .star-container{
                margin-right:.1rem;
            }
        }
        .avg-price{
            font-size: 0.13rem;
            color: #999;
            margin-left: 0.12rem;
        }
    }
}
.address{
    display: flex;
    align-items: center;
    .link{
        padding: 0.14rem 0;
        display: flex;
        height: 100%;
        color: inherit;
        -webkit-box-flex: 1;
        -moz-box-flex: 1;
        -ms-flex: 1;
        align-items: center;
        width:6.1rem;
        .icon-location{
            background-image: url(http://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/2573a00be5d4e6d4.png@55fea13);
            background-position: -.65rem -.63rem;
            width: 0.14rem;
            height: 0.14rem;
            display: inline-block;
            background-repeat: no-repeat;
            background-size: .81rem .78rem;
            vertical-align: middle;
            margin-right:.05rem;
        }
        .poi-address{
            display: inline-block;
            width: 88%;
            vertical-align: middle;
            font-size:.14rem;
        }
    }
    .phone{
        border-left: 1px solid #ddd8ce;
        text-align: justify;
        word-break: break-all;
        .poi-phone{
            height: .39rem;
            width: .6rem;
            display: flex;
            justify-content: center;
            align-items: center;
            .icon-tel{
                display: inline-block;
                background-repeat: no-repeat;
                background-size: .81rem .78rem;
                vertical-align: middle;
                background-image: url(http://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/2573a00be5d4e6d4.png@55fea13);
                background-position: -0.44rem -0.22rem;
                width: 0.2rem;
                height: 0.2rem;
            }
        }
    }
}
.block-container{
    border-top: 1px solid #ddd8ce;
    border-bottom: 1px solid #ddd8ce;
    margin-top: 0.1rem;
    margin-bottom: 0;
    background-color: #fff;
    .block-title{
        margin-left: 0.2rem;
        font-size: 0.17rem;
        color: #333;
        padding: 0.125rem 0.1rem 0.125rem 0;
        border-bottom: 1px solid #ddd8ce;
        overflow: hidden;
        font-weight: 400;
        position: relative;
        .icon-tuan{
            background-image: url(http://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/2573a00be5d4e6d4.png@55fea13);
            background-position: -.74rem -0.4rem;
            width: 0.16rem;
            height: 0.16rem;
            display: inline-block;
            background-repeat: no-repeat;
            background-size: .9rem .9rem;
            margin-right:.05rem;
            vertical-align: middle;
        }
    }
    .deal-list-component{
        border-top: 0;
        .items{
            padding:.1rem;
            display:flex;
            .imgBox{
                height: .82rem;
                width: .9rem;
                img{
                    height:100%;
                    width:100%;
                }
            }
            .contentBox{
                height: .82rem;
                margin-left: .1rem;
                flex:1;
                .deal-title{
                    height: 0.4rem;
                    margin-bottom: 0.16rem;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    font-size: 0.15rem;
                    color: #333;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
                .deal-info-line{
                    height: 0.22rem;
                    overflow: hidden;
                    display:flex;
                    align-items: flex-end;
                    .deal-price{
                        font-size: 0.13rem;
                        color: #FF4B10;
                        b{
                            font-size: 0.19rem;
                            margin-right: 0.02rem;
                        }
                    }
                    .deal-origin-price{
                        margin-left: 0.04rem;
                        font-size: 0.12rem;
                        color: #666;
                        text-decoration: none;
                    }
                }
            }
        }
    }
}
</style>