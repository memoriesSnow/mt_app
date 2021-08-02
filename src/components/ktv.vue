<template>
  <div class="homepage">
    <header class="navbar">
      <div class="nav_left">
        <router-link class="link" to="/">
          <img
            src="https://p1.meituan.net/travelcube/53361fd0bb6b333e779377789a8d669e531.png"
            alt=""
          />
        </router-link>
      </div>
      <div class="search_input">分类</div>
      <div class="nav_right">
        <router-link class="login" to="user">
          <span class="nav_btn">
            <img
              class="icon_mine"
              src="https://p0.meituan.net/travelcube/641521461179df7cfb88738dd1ea11ec1031.png"
            />
          </span>
        </router-link>
        <router-link class="login" to="user">
          <span class="nav_btn">
            <img
              class="icon_mine"
              src="https://p0.meituan.net/travelcube/4b45dc09c35f9175498345f8672d08991022.png"
            />
          </span>
        </router-link>
      </div>
    </header>
    <div class="download">
      <div class="d_left">
        <div class="mt_icon">
          <img
            class="mt_pic"
            src="https://p1.meituan.net/travelcube/7264ce9c25de2e464e3acd996fe8ad362803.png"
          />
        </div>
        <div class="p_box">
          <p class="p1">省钱利器 购物超划算</p>
          <p class="p2">吃喝玩乐尽在美团</p>
        </div>
      </div>
      <div class="d_right">
        <span class="toApp">去APP</span>
      </div>
    </div>
    <div class="nav-bar">
      <!-- <ul class ="nav">
              <li class ="dropdown-toggle"><span class ="nav-head-name">KTV</span></li>
                <li class ="dropdown-toggle"><span class ="nav-head-name">KTV</span></li>
                <li class ="dropdown-toggle"><span class ="nav-head-name">KTV</span></li>
                <li class ="dropdown-toggle"><span class ="nav-head-name">KTV</span></li>
          </ul> -->
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
        <van-dropdown-item v-model="value3" :options="option3" />
        <van-dropdown-item v-model="value4" :options="option4" />
      </van-dropdown-menu>
    </div>
    <div class="deal-container">
      <dl class="deal-list">
        <dd class="deal" v-for ="item in 2" :key="item">
          <div class="main-deal">
            <img
              class="deal-photo"
              src="https://p1.meituan.net/120.0/merchantpic/7a63a6cb5fa84dd45d6a4d7036b1df8d406015.jpg"
            />
            <div class="deal-info">
              <h2>嗨度KTV(万达店)</h2>
              <span class="level">
                <van-rate
                  size=".14rem"
                  color="#FF4B10"
                  void-icon="star"
                  void-color="#eee"
                  gutter=".01rem"
                  allow-half
                  readonly
                />
                5.0分
              </span>
              <div class="summary">
                <span class="price">
                  <strong>25</strong>
                  <span class="small-font">元起</span>
                </span>
                <span class="position">
                  <span class="position-name">万达</span>
                  <span class="position-distance">841.91km</span>
                </span>
              </div>
            </div>
          </div>
          <div class="deal-mes">
              <span class ="mes">
                  <span class ="tag-wrap"></span>
                  <span class ="order-mes-key">小包3小时101元, 中包3小时121元</span>
              </span>
              <span class ="mes">
                  <span class ="tag-wrap"></span>
                  <span class ="group-mes-key">25元/券，1小时券</span>
              </span>
          </div>
        </dd>
      </dl>
    </div>
    <footer>
      <div class="footer-bar">
        <div class="button_box">
          <button @click="login()">登录</button>
          <button @click="regist()">注册</button>
        </div>
        <div class="pull-right">
          <span>城市:</span>
          <img
            src="https://p1.meituan.net/travelcube/c6c04160817d530ecddf9f86b158106e2032.png"
          />
          <a>廊坊</a>
        </div>
      </div>
      <div class="footer-nav">
        <ul>
          <li><a href="#">首页</a></li>
          <li><a href="#">我的</a></li>
          <li><a href="#">美团下载</a></li>
          <li><a href="#">电脑版</a></li>
          <li><a href="#">帮助</a></li>
        </ul>
      </div>
      <div class="footer-links">
        友情链接：
        <a href="">猫眼电影</a>
        <a href="">大众点评</a>
        <a href="">美团旅行</a>
        <a href="">榛果民宿</a>
        <a href="">大众点评下载</a>
        <a href="">美团收银官网</a>
        <a href="">美团餐饮培训</a>
        <a href="">快驴进货商家合作</a>
      </div>
      <div class="footer-copyright">
        <div class="hr"></div>
        <span
          >©2021 美团网
          <a href="http://beian.miit.gov.cn/">京ICP证070791号</a></span
        >
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      value2: "a",
      value3: "A",
      value4: "0",
      option1: [
        { text: "KTV", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 },
      ],
      option2: [
        { text: "全城", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" },
      ],
      option3: [
        { text: "默认排序", value: "A" },
        { text: "新款商品", value: "B" },
        { text: "活动商品", value: "C" },
      ],
      option4: [
        { text: "筛选", value: "0" },
        { text: "好评排序", value: "1" },
        { text: "销量排序", value: "2" },
      ],
    };
  },
  methods: {
    login() {
      this.$router.push("login");
    },
    regist() {
      this.$router.push("regist");
    },
  },
};
</script>

<style lang="less" scoped>
.homepage {
  background: #f0efed;
}
//  头部左边(地区)部分样式
.navbar {
  height: 0.5rem;
  background-image: linear-gradient(135deg, #ffd000 0%, #ffbd00 100%);
  width: 100%;
  display: flex;
}
.nav_left {
  height: 100%;
  width: 0.95rem;
  font-size: 0.14rem;
}
.link {
  height: 0.5rem;
  width: 0.225rem;
  line-height: 0.5rem;
  padding: 0 0.15rem;
  display: flex;
  align-items: center;
  img {
    width: 0.1rem;
    height: 0.18rem;
  }
}
//  头部中间(搜索框)部分样式
.search_input {
  font-family: PingFangSC-Regular;
  font-size: 0.16rem;
  color: #222222;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
//  头部右边(登录)部分样式
.nav_right {
  height: 100%;
  width: 0.95rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 0.2rem;
}
.login {
  display: inline-block;
  height: 100%;
  line-height: 0.4rem;
  text-align: center;
  padding: 0 0 0 0.1rem;
  .nav_btn {
    display: inline-block;
    font-size: 0.2rem;
    line-height: 1;
    vertical-align: middle;
  }
}
.icon_mine {
  width: 0.24rem;
  height: 0.24rem;
}

//  下载美团app一栏
.download {
  height: 0.5rem;
  background: #000;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.08rem 0.14rem;
}

.d_left {
  width: 2rem;
  height: 100%;
  display: flex;

  .mt_icon {
    .mt_pic {
      display: block;
      width: 0.36rem;
      height: 0.36rem;
    }
  }
  .p_box {
    padding-left: 0.1rem;
    color: #fff;
    .p1 {
      font-size: 0.13rem;
      padding-top: 0.03rem;
      text-align: left;
    }
    .p2 {
      font-size: 0.1rem;
      font-weight: 300;
      padding-top: 0.05rem;
      text-align: left;
    }
  }
}
.d_right {
  background: #ffcf01;
  padding: 0 0.1rem;
  display: flex;
  align-items: center;
  border-radius: 0.07rem;
  justify-content: center;
  .toApp {
    font-size: 0.12rem;
    color: #000;
  }
}
//
.menu_list {
  width: 100%;
  margin-bottom: 0.1rem;
  background: #fff;
  .menu_box {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .menu_item {
      width: 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0.1rem;
      .menu_link {
        .menu_pic {
          width: 0.42rem;
          height: 0.42rem;
          display: flex;
          margin-bottom: 0.07rem;
          img {
            height: inherit;
            width: inherit;
          }
        }
        .menu_name {
          text-align: center;
          font-size: 0.12rem;
          color: #666;
        }
      }
    }
  }
}
//  主页最下方
footer {
  margin-top: 0.15rem;
  padding: 0 0.1rem 0.2rem;
  background: #fff;
  .footer-bar {
    display: flex;
    padding: 0.15rem 0.15rem 0;
    margin-top: -0.15rem;
    justify-content: space-between;
    .button_box {
      display: flex;
    }
    button {
      background-image: linear-gradient(135deg, #ffd000 0%, #ffbd00 100%);
      border-radius: 0.05rem;
      font-size: 0.13rem;
      color: #222222;
      width: 0.55rem;
      height: 0.27rem;
      padding: 0;
      font-family: PingFangSC-Medium;
      line-height: 0.27rem;
      border: none;
      margin-right: 0.1rem;
    }
    .pull-right {
      display: flex;
      align-items: center;
      span {
        color: #999999;
        font-family: PingFangSC-Regular;
        font-size: 0.13rem;
        padding-right: 0.1rem;
      }
      img {
        width: 0.12rem;
        height: 0.137rem;
      }
      a {
        background: #ffffff;
        padding-left: 0.05rem;
        color: #222222;
        margin-top: -0.03rem;
        font-size: 0.13rem;
        font-family: PingFangSC-Medium;
      }
    }
  }
  .footer-nav {
    ul {
      margin: 0;
      padding: 0.18rem 0;
      font-size: 0.12rem;
      white-space: nowrap;
      display: -webkit-box;
      li {
        -webkit-box-flex: 1;
        -moz-box-flex: 1;
        border-right: 0.01rem solid #666;
        text-align: center;
        a {
          color: #fe8c00;
          font-weight: 400;
          font-size: 0.11rem;
        }
      }
      li:last-child {
        border: none;
      }
    }
  }
  .footer-links {
    margin: 0.1rem;
    font-size: 0.11rem;
    text-align: center;
    color: #646464;
    font-family: PingFangSC-Medium;
    a + a {
      padding-bottom: 0.1rem;
    }
    a + a {
      padding-left: 0.25rem;
      display: inline-block;
    }
    a:visited {
      color: #646464;
    }
  }
  .footer-copyright {
    color: #999;
    font-size: 0.11rem;
    text-align: center;
    position: relative;
    .hr {
      display: block;
      content: "";
      width: 100%;
      position: absolute;
      top: 50%;
      border-top: 1px solid #999;
      z-index: 0;
    }
    span {
      background: #fff;
      font-size: inherit;
      padding: 0 0.1rem;
      position: relative;
      a {
        color: #999;
      }
    }
  }
}
/* .nav-bar{
    position: relative;
    z-index: 30;
    .nav{
        display:flex;
        background: #FFF;
        border-bottom: 1px solid #c6c0b3;
        text-align: center;
        height: .42rem;
        line-height: .42rem;
        user-select: none;
        .dropdown-toggle:first-child {
            border: 0;
        }
        .dropdown-toggle{
            flex:1;
            display:flex;
            justify-content: center;
            align-items: center;
            border-left: 1px solid #c6c0b3;
            width: 100%;
            color: #666;
            .nav-head-name{
                display: inline-block;
                white-space: nowrap;
                overflow: hidden;
                max-width: 80%;
                vertical-align: middle;
                text-overflow: ellipsis;
                font-size:.14rem;
            }
        }
        .dropdown-toggle:after{
            content: "";
            width: 0;
            height: 0;
            display: inline-block;
            border-top: .075rem solid #B7B7B7;
            border-left: .045rem solid transparent;
            border-right: .045rem solid transparent;
            border-bottom: 0;
            margin-left: .06rem;
        }
    }
} */
.deal-container {
  position: relative;
}
.deal {
  border-top: 1px solid #ddd8ce;
  border-bottom: 1px solid #ddd8ce;
  margin-top: 0.1rem;
  background-color: #fff;
  padding: 0.12rem 0 0 0;
  overflow: hidden;
  font-size: 0.13rem;
  color: #666;
  display: block;
  .main-deal {
    display: flex;
    align-items: center;
    padding: 0 0.1rem;
    .deal-photo {
      width: 0.64rem;
      height: 0.64rem;
      margin: 0 0.1rem 0.1rem 0;
    }
    .deal-info {
      padding: 0 0 0.1rem 0;
      flex: 1;
      h2 {
        font-weight: normal;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        color: #333;
        margin: 0;
        padding: 0;
        font-size: 0.16rem;
      }
      .level {
        display: block;
        color: #f90;
        margin: 0.1rem auto 0.07rem 0;
      }
      .summary {
        position: relative;
        height: 0.16rem;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
.price {
  overflow: hidden;
  strong {
    font-family: Helvetica;
    font-weight: normal;
    font-size: 0.14rem;
    margin-left: 0.01rem;
    color: #ff6200;
  }
  .small-font {
    font-size: 0.12rem;
    margin-left: 0.02rem;
    color: #ff6200;
  }
}
.position-distance {
  margin-left: 0.06rem;
}
.deal-mes{
    padding: .1rem .12rem .1rem 0;
    border-top: 1px solid #DDD8CE;
    .mes{
        font-family: Helvetica;
        font-weight: lighter;
        position: relative;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-bottom: .1rem;
        .tag-wrap{
            float: left;
            width: .74rem;
            height: .14rem;
            margin-right: .1rem;
            // text-align: right;
        }
        .order-mes-key:before{
            content: "订";
            display: inline-block;
            background: #f5716e;
            color: #fff;
            font-size: .12rem;
            padding: .03rem;
            border-radius: .02rem;
            line-height: 1;
            margin-right: .1rem;
        }
        .group-mes-key:before{
            content: "团";
            display: inline-block;
            background: #FF4D0F;
            color: #fff;
            font-size: .12rem;
            padding: .03rem;
            border-radius: .02rem;
            line-height: 1;
            margin-right: .1rem;
        }
    }
    .mes:last-child{
        padding-bottom:0;
    }
}
</style>