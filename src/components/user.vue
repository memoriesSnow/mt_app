<template>
  <div class ="user">
      <van-nav-bar
        title="我的美团"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #right class ="right">
            <van-icon name="wap-home-o" size="25" />
           <van-icon name="search" size="25" />
        </template>
      </van-nav-bar>
      <div class ="person">
        <div class ="user-pic"></div>
        <div class ="user-info">
          <p class ="user-name">您好：尊敬的{{ userName }}</p>
          <p class ="user-money">账户余额：<span>10</span>元</p>
        </div>
      </div>
      <div class ="menus">
        <div class ="menu-title">
          <span class="icon"><van-icon name="orders-o" size="18"/></span>全部订单
        </div>
        <div class ="menu-items">
          <div class ="item">
            <span class ="icon"><van-icon name="pending-payment" size="40"/></span>
            <span class ="items-text">待付款</span>
          </div>
          <div class ="item">
            <span class ="icon"><van-icon name="refund-o" size="40"/></span>
            <span class ="items-text">待使用</span>
          </div>
          <div class ="item">
            <span class ="icon"><van-icon name="records" size="40"/></span>
            <span class ="items-text">待评价</span>
          </div>
          <div class ="item">
            <span class ="icon"><van-icon name="after-sale" size="40"/></span>
            <span class ="items-text">退款/售后</span>
          </div>
        </div>
      </div>
      <div class ="active">
        <div class ="items-container">
          <div class ="item">
            <div class ="icon-back">
              <van-icon name="star-o" size="18"/>
            </div>
            我的收藏
          </div>
          <div class ="item">
            <div class ="icon-back">
              <van-icon name="gold-coin-o" size="18"/>
            </div>
            我的抵用券
          </div>
          <div class ="item">
            <div class ="icon-back">
              <van-icon name="gift-o" size="18"/>
            </div>
            我的抽奖单
          </div>
          <div class ="item">
            <div class ="icon-back">
              <van-icon name="points" size="18"/>
            </div>
            积分换礼品
          </div>
        </div>
      </div>
      <div class ="quit" @click="quitAccount()">
        退出登录
      </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import Cookie from '../utils/cookie'
export default {
  data(){
    return{
      userName:''
    }
  },
  methods:{
    onClickLeft(){
      console.log('left');
      window.history.back();
    },
    onClickRight(){
      console.log('right')
    },
    quitAccount(){
      console.log(1);
      Cookie.delete('username');
      Cookie.delete('password');
      this.$router.back();
      Toast('已退出登录')
    },
    getUsername(){
      this.userName = Cookie.get('username')
      console.log(this.userName)
    }
  },
  mounted(){
    this.getUsername();
  }
}
</script>

<style lang="less">
.user{
  background:#F0F0F0;
}
.van-nav-bar{
  background-image: linear-gradient(135deg, #FFD000 0%, #FFBD00 100%);
  .van-icon{
    color:#000;
  }
}
.van-nav-bar__title{
  color:#000;
}
.right{
  width:1rem;
  height:100%;
  background:red;
}
.van-nav-bar__right{
  .van-icon{
    color: #000;
    margin-left: .1rem;
  }
}
.person{
  height:1rem;
  width:100%;
  background: #666;
  padding:.2rem;
  display:flex;
  align-items: center;
  color:#fff;
}
.user-pic{
  background: #E7E7E7;
  width:.5rem;
  height:.5rem;
  border-radius:50%;
  margin:0 .1rem;
}
.user-info{
  flex:1;
  font-size:.14rem;
  height:.4rem;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  .user-name{
    font-weight:700;
  }
  .user-money{
    span{
      color:orange;
    }
  }
}
.menus{
  width:100%;
  margin:.1rem 0;
  background:#fff;
  .menu-title{
    font-size:.18rem;
    padding:.15rem .05rem;
    border-bottom:solid .01rem #aaa;  
    .icon{
      background:orange;
      padding: .02rem .03rem;
      margin-right:.08rem;
      .van-icon{
        color:#fff;
      }
    }
  }
  .menu-items{
    display:flex;
    .item{
      width:25%;
      height:100%;
      padding:.1rem;
      box-sizing:content-box;
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .icon{
        width:50%;
        display:flex;
        justify-content: center;
        .van-icon{
          color:#000;
        }
      }
      .items-text{
        font-size:.16rem;
        margin-top:.02rem;
      }
    }
  }
}
.items-container{
  background:#fff;
  .item{
    display:flex;
    font-size:.16rem;
    padding:.1rem;
    border-bottom:solid .5px #aaa;
    align-items: center;
    .icon-back{
      padding: 0.02rem 0.03rem;
      margin-right: 0.08rem;
      color:#fff;
    }
  }
  .item:nth-of-type(1) .icon-back{
    background:#0090EC;
  }
  .item:nth-of-type(2) .icon-back{
    background:#EE2803;
  }
  .item:nth-of-type(3) .icon-back{
    background:#EBB739;
  }
  .item:nth-of-type(4) .icon-back{
    background:#904CBB;
  }
  .item:last-child{
    border:none;
  }
}
.quit{
  width:100%;
  height:.4rem;
  color:#fff;
  background:#EE2803;
  padding:.1rem .2rem;
  font-size:.2rem;
  text-align:center;
  position:absolute;
  bottom:0;
  letter-spacing: .05rem;
  font-weight:500
}
</style>