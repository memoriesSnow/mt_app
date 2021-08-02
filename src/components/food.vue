<template>
  <div class ="food">
      <header class ="new-navbar">
          <div class ="nav-wrap-left">
            <a href="javascript:history.back()" >
              <van-icon name="arrow-left" size=".25rem" color="#FF4B10" />
            </a>
          </div>
          <div class ="new-nav-header">
            <a>
              <span>
                <van-icon name="search" size=".2rem" color="#000" />
                输入商家名、品类或商圈
              </span>
            </a>
          </div>
          <div class ="nav-wrap-right">
            <a @click="toUser">
              <span>
                <van-icon name="contact" size=".25rem" color="#FF4B10" />
              </span>
            </a>
          </div>
      </header>
      <div class ="content">
        <div class ="banner-download">
          <div class ="img_box">
            <img src ="//s1.meituan.net/bs/file?f=meis/meishi.mobile:img/app_download_banner.png@55fea13"/>
          </div>
        </div>
        <div class ="hot-areas-wrapper">
          <div class="hot-area-item-wrapper" v-for="(item,index) in hotAreaList" :key="index">
            <a href="#">
              <div class ="image-wrapper">
                <img :src="item.hot_pic"/>
              </div>
              <span class ="hot-area-name">{{ item.hot_name }}</span>
            </a>
          </div>
        </div>
        <div class ="nav-bar-wrapper">
          <div class ="nav">
            <a herf="#" class ="dropdown-toggle">
              <span class ="nav-head-name">全部美食</span>
            </a>
            <a herf="#" class ="dropdown-toggle">
              <span class ="nav-head-name">附近商家</span>
            </a>
            <a herf="#" class ="dropdown-toggle">
              <span class ="nav-head-name">只能排序</span>
            </a>
            <a herf="#" class ="dropdown-toggle">
              <span class ="nav-head-name">筛选</span>
            </a>
          </div>
          <div class ="deal-container">
            <div class ="list" v-for="item in shopList" :key="item.id" @click="toDetails(item.id)"> <!-- 这里for -->
              <div class ="poi-info-wrapper"> 
                <div class ="image-wrapper">
                  <div class ="imgbox">
                    <img :src="item.img"/>
                  </div>
                </div>
                <div class ="poi-info">
                  <div class ="poi-name">{{ item.title }}</div>
                  <div class ="price-wrapper">
                    <div class ="star_container">
                      <!-- <span class = "stars">
                        <span class ="star_item"><i class ="icon"></i></span>
                        <span class ="star_item"><i class ="icon"></i></span>
                        <span class ="star_item"><i class ="icon"></i></span>
                        <span class ="star_item"><i class ="icon"></i></span>
                        <span class ="star_item"><i class ="icon"></i></span>
                      </span> -->
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
                    <span class ="price">{{ item.price }}元/人</span>
                    <div class ="location">
                      <span class="area">{{ item.distance }}</span>
                    </div>
                  </div>
                  <div class ="cate-wrapper">
                    <span class ="cate-name">{{ item.category }}</span>
                    <!-- <span class ="smart-tag">新朝阳甜点饮品第2名</span>
                    <span class ="smart-tag">回头客多</span> -->
                  </div>
                  <div class ="service-tags"></div>
                </div>
              </div>
              <div class ="deal-info-wrapper">
                <div class ="preferential">
                  <div class ="promotion-wrapper">
                    <span class="promotion">{{ item.juan }}</span>
                  </div>
                  <img class ="icon" src="https://p1.meituan.net/travelcube/734c7f818631a0aa8e49a814b90b1b771242.png"  />
                  <span class ="contents">
                    {{ item.tuan }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { listObj } from '../server'
export default {
  data(){
    return{
      hotAreaList:[
        {
          hot_pic:'//p0.meituan.net/codeman/050ce6754d32482c75273e292407f2b312356.png',
          hot_name:'火锅'
        },
        {
          hot_pic:'//p0.meituan.net/codeman/e5277d18a450c1fe51c6cda9cff6a9e016621.png',
          hot_name:'甜点饮品'
        },
        {
          hot_pic:'//p1.meituan.net/codeman/962b082a549e88f2939dbee2ac3d235613019.png',
          hot_name:'自助餐'
        },
        {
          hot_pic:'//p0.meituan.net/codeman/12ff749bd7fdf473abd59e2651a9ee1913684.png',
          hot_name:'小吃快餐'
        },
        {
          hot_pic:'//p0.meituan.net/codeman/0fe84029cc6cf6ccf12838ce6546734a16488.png',
          hot_name:'西餐'
        },
        {
          hot_pic:'//p0.meituan.net/codeman/2ae734d26259e6138ea61f2dcdac8fa115018.png',
          hot_name:'烧烤烤肉'
        },
        {
          hot_pic:'//p1.meituan.net/codeman/a7c360a9aeca1f972a1819465154c6b414043.png',
          hot_name:'香锅烤鱼'
        },
        {
          hot_pic:'//p1.meituan.net/codeman/13a0d1537d45b237a07b665eb5a7845e17141.png',
          hot_name:'海鲜'
        },
        
      ],
      shopList:[]
    }
  },
  methods:{
    getShopList(){
      listObj.getFoodlist().then(res=>{
        res.sort((a,b)=>b.rank-a.rank)
        this.shopList = res;
        console.log(res);
      })
    },
    toUser(){
      this.$router.push('user')
    },
    toDetails(id){
      this.$router.push({
        path:'/food_details',
        name:'FoodDetail',
        /* params:{
          id
        }, */
        query:{
          id
        }
      })
    }
  },
  mounted(){
    this.getShopList();
  }
}
</script>

<style lang="less" scoped>
.food{
  background:#f0f0f0;
}

.new-navbar{
  height: 0.45rem;
  line-height: 0.45rem;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  color: #fff;
  display: flex;
  width: 100%;
  -webkit-box-align: center;
  align-items: center;
  z-index: 999;
}
.nav-wrap-left{
  display: block;
  height: 0.45rem;
  width: 0.53rem;
  line-height: 0.45rem;
  padding: 0 0.15rem;
  a{
    display: flex;
    height: 0.45rem;
    width: 0.225rem;
    line-height: 0.45rem;
    align-items: center;
    // padding: 0 0.15rem;
  }
}
.new-nav-header{
  display: block;
  font-size: 0.13rem;
  font-weight: 400;
  text-align: center;
  height: 0.3rem;
  line-height: 0.3rem;
  border-radius: 0.25rem;
  overflow: hidden;
  background: #ffffff;
  width: 2.7rem;
  -webkit-box-align: center;
  align-items: center;
  margin: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  span{
    font-size:.13rem;
    color:#999;
    display:flex;
    justify-content: center;
    align-items: center;
  }
}
.nav-wrap-right{
  height:inherit;
  width: 0.53rem;
  padding: 0 0.15rem;
  text-align: center;
  span{
    display: flex;
    height: 0.45rem;
    width: 0.225rem;
    line-height: 0.45rem;
    align-items: center;
  }
}
.banner-download {
  position: relative;
  min-height: 0.93rem;
}
.content{
  position:relative;
  top:0.45rem;
}
.img_box{
  display: block;
  width: 100%;
  height: 1.1rem;
  img{
    width:100%;
    height:100%
  }
}
.hot-areas-wrapper{
  height: 1.75rem;
  font-size: 0.12rem;
  padding-top: 0.03rem;
  background: #ffffff;
  margin-bottom: 0.1rem;
}
.hot-area-item-wrapper{
  display: inline-block;
  margin-top: 0.12rem;
  width: 25%;
  text-align: center;
  user-select: none;
  .image-wrapper{
    position: relative;
    margin: 0 auto;
    width: 0.45rem;
    height: 0.45rem;
    border-radius: 50%;
    background: #f4f4f4;
    img{
      max-width: 100%;
    }
  }
  .hot-area-name{
      display: inline-block;
      color: #666666;
      margin-top: 0.05rem;
      letter-spacing: .01rem;
      font-family: PingFangSC-Regular;
      line-height: 0.16rem;
    }
}
.nav-bar-wrapper{
  min-height: 7rem;
  .nav{
    display:flex;
    background: #fff;
    border-bottom: 1px solid #d8d8d8;
    .dropdown-toggle{
      display: flex;
      position: relative;
      width: 100%;
      // align-items: center;
      justify-content: center;
      color: #666;
      .nav-head-name{
        padding:.16rem 0;
        font-size:.14rem;
      }
    }
    .dropdown-toggle:after{
      content: '';
      width: 0;
      height: 0;
      display: inline-block;
      border-top: 0.075rem solid #b7b7b7;
      border-left: 0.045rem solid transparent;
      border-right: 0.045rem solid transparent;
      border-bottom: 0;
      margin-left: 0.06rem;
      margin-top: 0.2rem;
    }
  }
  .deal-container{
    background:red;
    .list{
      background: #ffffff;
      padding: 0.12rem 0 0 0.15rem;
      border-bottom: 1px solid #e5e5e5;
      .poi-info-wrapper{
        display: flex;
        .image-wrapper{
          position: relative;
          margin-top: 0.01rem;
          width: .8rem;
          height: .8rem;
          .imgbox{
            height: .8rem;
            width: .8rem;
            img{
              width:100%;
              height:100%;
            }
          }
        }
      }
    }
  }
}
.poi-info{
  flex: 1;
  padding: 0 0.09rem 0.08rem 0;
  margin-left: 0.09rem;
  border-bottom: 1px solid #e5e5e5;
  box-sizing: content-box;
  max-width: 2.64rem;
  min-height: .8rem;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  justify-content: center;
  .poi-name{
    font-family: '.PingFang-SC-Medium';
    font-size: 0.17rem;
    height: 0.24rem;
    line-height: 0.24rem;
    color: #333333;
    letter-spacing: 0.14px;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
  }
  .price-wrapper{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    font-size: 0.12rem;
    line-height: 0.165rem;
    height: .165rem;
    margin-top: 0.03rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    .star_container{
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      .stars{
        display: flex;
        color: #FF4B10;
        -webkit-box-align: center;
        align-items: center;
        .star_item{
          width: 0.12rem;
          height: 0.12rem;
          display: flex;
          margin-right: 0.04rem;
          position: relative;
          .icon{
            width: 100%;
            height: 100%;
            background:url(https://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/fc455e75cfeff47a.png@55fea13);
            background-size:cover;
          }
        }
      }
    }
    .price{
      display: inline-block;
      font-family: PingFangSC-Regular;
      font-size: 0.12rem;
      color: #666666;
      letter-spacing: 0.2px;
    }
    .location{
      position: absolute;
      top: 0;
      right: 0;
      height: 0.165rem;
      line-height: 0.165rem;
      font-size: 0.12rem;
      font-family: PingFangSC-Regular;
      color: #666666;
      letter-spacing: 0.2px;
    }
  }
  .cate-wrapper{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 0.04rem;
    height: 0.16rem;
    line-height: 0.16rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    .cate-name{
      height: 0.14rem;
      line-height: 0.14rem;
      font-family: PingFangSC-Regular;
      font-size: 0.12rem;
      color: #666666;
      letter-spacing: 0.1px;
      margin-right: 0.05rem;
      vertical-align: middle;
    }
    .smart-tag{
      display: inline-block;
      margin-right: 0.1rem;
      height: 0.14rem;
      line-height: 0.14rem;
      vertical-align: middle;
      padding: 0 0.01rem;
      font-size: 0.1rem;
      border-radius: 0.05rem;
      color: rgb(255, 75, 16);
      background-color: rgb(251, 244, 228);
    }
  }
}
.deal-info-wrapper{
  .preferential{
    margin: 0.1rem 0;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 0.3rem;
    line-height: 0.3rem;
    white-space: nowrap;
    .promotion-wrapper{
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: end;
      justify-content: flex-end;
      width: 0.8rem;
      height: 0.2rem;
      font-family: PingFangSC-Regular;
      color: #ff8226;
      letter-spacing: 0.17px;
      margin-right: 0.1rem;
      .promotion{
        display: inline-block;
        max-width: .8rem;
        height: 0.15rem;
        line-height: 0.15rem;
        border: 1px solid #ff8226;
        border-radius: 0.024rem;
        padding: 0 0.03rem;
        font-size: 0.1rem;
      }
    }
    .icon{
      width: 0.15rem;
      height: 0.15rem;
    }
    .contents{
      font-family: PingFangSC-Regular;
      font-size: 0.11rem;
      color: #666666;
      letter-spacing: 0.1px;
      max-width: 2.4rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-left:.05rem;
    }
  }
}
</style>