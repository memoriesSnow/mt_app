<template>
  <div class ="homepage">
      <header class ="navbar">
          <div class ="nav_left">
              <router-link class="link" to ="/">
                  <span class="nav_city">
                      廊坊
                      <div class ="space"></div>
                      <img class ="icon_down" src="https://p0.meituan.net/travelcube/45c79a92755b54adc9dc1c4682b123b3201.png"/>
                  </span>
              </router-link>
          </div>
          <div class ="search_input">
              <div class="search_link">
                  <img class ="icon_search" src="https://p0.meituan.net/travelcube/99c29829cf1b85d5cdbc76a1bd0b7329814.png"/>
                  <span class ="single_line">请输入商家名、品类或者商圈...</span>
              </div>
          </div>
          <div class ="nav_right">
              <router-link class ="login" to ="user">
                  <span class ="nav_btn">
                      <img class ="icon_mine" src="https://p0.meituan.net/travelcube/641521461179df7cfb88738dd1ea11ec1031.png"/>
                  </span>
              </router-link>
          </div>
      </header>
      <div class ="download">
          <div class ="d_left">
              <div class ="mt_icon">
                  <img class ="mt_pic" src="https://p1.meituan.net/travelcube/7264ce9c25de2e464e3acd996fe8ad362803.png"/>
              </div>
              <div class ="p_box">
                  <p class ="p1">省钱利器 购物超划算</p>
                  <p class ="p2">吃喝玩乐尽在美团</p>
              </div>
          </div>
          <div class ="d_right">
              <span class ="toApp">去APP</span>
          </div>
      </div>
      <div class ="menu_list">
          <div class ="menu_box">
              <div class ="menu_item" v-for="(item,index) in menuList" :key="index">
                  <router-link class ="menu_link" :to="item.path">
                      <p class ="menu_pic"><img :src="item.pic"/></p>
                      <p class ="menu_name">{{ item.name }}</p>
                  </router-link>
              </div>
          </div>
      </div>
      <guesslike></guesslike>
      <footer>
          <div class ="footer-bar">
              <div class ="button_box">
                <button @click="login()">登录</button>
                <button @click="regist()">注册</button>
              </div>
              <div class ="pull-right">
                  <span>城市:</span>
                  <img src ="https://p1.meituan.net/travelcube/c6c04160817d530ecddf9f86b158106e2032.png"/>
                  <a>廊坊</a>
              </div>
          </div>
          <div class ="footer-nav">
              <ul>
                  <li><a href="#">首页</a></li>
                  <li><a href="#">我的</a></li>
                  <li><a href="#">美团下载</a></li>
                  <li><a href="#">电脑版</a></li>
                  <li><a href="#">帮助</a></li>
              </ul>
          </div>
          <div class ="footer-links">
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
          <div class ="footer-copyright">
              <div class ="hr"></div>
              <span>©2021 美团网 <a href="http://beian.miit.gov.cn/">京ICP证070791号</a></span>
            </div>   
      </footer>
  </div>
</template>

<script>
import guesslike from './views/guesslike.vue'
import Cookie from './utils/cookie'
import { listObj } from './server/index.js'
export default {
    data(){
        return{
            menuList:[
                {
                    path:'food',
                    pic:require('./assets/美食.png'),
                    name:'美食'
                },
                {
                    path:"movie",
                    pic:require('./assets/猫眼电影.png'),
                    name:'猫眼电影'
                },
                {
                    path:'hotel',
                    pic:require('./assets/酒店.png'),
                    name:'酒店'
                },
                {
                    path:'relax',
                    pic:require('./assets/休闲娱乐.png'),
                    name:'休闲娱乐'
                },
                {
                    path:'buy_food',
                    pic:require('./assets/外卖.png'),
                    name:'外卖'
                },
                {
                    path:'KTV',
                    pic:require('./assets/KTV.png'),
                    name:'KTV'
                },
                {
                    path:'travel',
                    pic:require('./assets/周边游.png'),
                    name:'周边游'
                },
                {
                    path:'beauty',
                    pic:require('./assets/丽人.png'),
                    name:'丽人'
                },
                {
                    path:'mom',
                    pic:require('./assets/母婴亲子.png'),
                    name:'母婴亲子'
                },
                {
                    path:'all',
                    pic:require('./assets/全部分类.png'),
                    name:'全部分类'
                },
            ],
            username:'',
            password:''
        }
    },
    methods:{
        login(){
            this.$router.push('login')
        },
        regist(){
            this.$router.push('regist')
        },
        freeLogin(){
            this.username = Cookie.get('username')
            this.password = Cookie.get('password')
            console.log(this.username);
            console.log(this.password);
            let params = {
                userName:this.username,
                password:this.password
            }
            if(this.username && this.password){
                listObj.loginAccount(params).then(()=>{
                    this.saveAccount();
                })
            }
        },
        saveAccount(){
            let params = {
                name:'username',
                value:this.username,
                // expires:7 * 24 * 60 * 60
                expires:600
            }
            let params1 = {
                name:'password',
                value:this.password,
                // expires:7 * 24 * 60 * 60
                expires:600
            }
            Cookie.set(params);
            Cookie.set(params1);
        }
    },
    mounted(){
        this.freeLogin();
    },
    components:{guesslike}
}
</script>

<style lang="less" scoped>
.homepage{
    background:#f0efed;
}
//  头部左边(地区)部分样式
.navbar{
    height:.5rem;
    background-image:linear-gradient(135deg, #FFD000 0%, #FFBD00 100%);
    width:100%;
    display:flex;
}
.nav_left{
    height:100%;
    width:.8rem;
    font-size:.14rem;
}
.link{
    display:inline-block;
    height:100%;
    width:100%;
    text-align:center;
}
.nav_city{
    vertical-align: middle;
    text-align: center;
    font-family: PingFangSC-Medium;
    color: #222222;
    line-height:.5rem;
}
.space{
    display: inline-block;
    width: .03rem;
}
.icon_down{
    display:inline-block;
    width: 0.08rem;
    height: 0.05rem;
    // padding-right:.08rem;
    margin-left: -.04rem;
    margin-bottom: .02rem;    
}

//  头部中间(搜索框)部分样式
.search_input{
    height:.32rem;
    line-height:.32rem;
    margin:.09rem 0;
    width:2.43rem;
    background:#fff;
    border-radius: 0.09rem;
    box-sizing:border-box;
    opacity:0.9;
    color:#999;
}
.search_link{
    height:100%;
    width:100%;
    font-size:.2rem;
    display:flex;
    align-items:center;
}
.icon_search{
    width:0.33rem;
    height: 0.14rem;
    padding-right:.06rem;
    padding-left:.13rem;
    // padding: 0.07rem 0.06rem 0.08rem 0.13rem;
}
.single_line{
    font-size: 0.13rem;
}

//  头部右边(登录)部分样式
.nav_right{
    height:100%;
    width:.52rem;
    display:flex;
    justify-content: center;
    align-items:center;
}
.login{
    display: inline-block;
    height: 100%;
    line-height: .4rem;
    text-align: center;
    .nav_btn{
        display: inline-block;
        font-size: .2rem;
        line-height: 1;
        vertical-align: middle;
    }
}
.icon_mine{
    width:.24rem;
    height:.24rem;
}

//  下载美团app一栏
.download{
    height:.5rem;
    background:#000;
    width:100%;
    display:flex;
    justify-content: space-between;
    padding:.08rem .14rem;
}

.d_left{
    width:2rem;
    height:100%;
    display:flex;

    .mt_icon{
        .mt_pic{
            display: block;
            width:.36rem;
            height:.36rem;
        }
    }
    .p_box{
        padding-left: 0.1rem;
        color: #fff;
        .p1{
            font-size: 0.13rem;
            padding-top: 0.03rem;
            text-align: left;
        }
        .p2{
            font-size: 0.1rem;
            font-weight: 300;
            padding-top: 0.05rem;
            text-align: left;
        }
    }
}
.d_right{
    background:#FFCF01;
    padding:0 .1rem;
    display: flex;
    align-items: center;
    border-radius: 0.07rem;
    justify-content: center;
    .toApp{
        font-size:.12rem;
        color:#000;
    }
}
//  
.menu_list{
    width:100%;
    margin-bottom:.1rem;
    background: #fff;
    .menu_box{
        width:100%;
        display:flex;
        flex-wrap: wrap;
        .menu_item{
            width:20%;
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: .1rem;
            .menu_link{
                .menu_pic{
                    width: .42rem;
                    height: .42rem;
                    display:flex;
                    margin-bottom:.07rem;
                    img{
                        height:inherit;
                        width:inherit;
                    }
                }
                .menu_name{
                    text-align: center;
                    font-size: .12rem;
                    color: #666;
                }
            }
        }
    }
}

//  主页最下方
footer{
    margin-top:.15rem;
    padding:0 .1rem .2rem;
    background:#fff;
    .footer-bar{
        display:flex;   
        padding:.15rem .15rem 0;  
        margin-top:-.15rem;
        justify-content: space-between;
        .button_box{
            display:flex;
        }
        button{
            background-image: linear-gradient(135deg, #FFD000 0%, #FFBD00 100%);
            border-radius: 0.05rem;
            font-size: 0.13rem;
            color: #222222;
            width: 0.55rem;
            height: 0.27rem;
            padding: 0;
            font-family: PingFangSC-Medium;
            line-height: 0.27rem;
            border:none;
            margin-right:.1rem;
        }
        .pull-right{
            display:flex;
            align-items:center;
            span{
                color: #999999;
                font-family: PingFangSC-Regular;
                font-size: 0.13rem;
                padding-right: 0.1rem;
            }
            img{
                width: 0.12rem;
                height: 0.137rem;
            }
            a{
                background: #FFFFFF;
                padding-left: .05rem;
                color: #222222;
                margin-top: -0.03rem;
                font-size: 0.13rem;
                font-family: PingFangSC-Medium;
            }
        }
    }
    .footer-nav{
        ul{
            margin: 0;
            padding: .18rem 0;
            font-size: .12rem;
            white-space: nowrap;
            display: -webkit-box;
            li{
                -webkit-box-flex: 1;
                -moz-box-flex: 1;
                border-right: .01rem solid #666;
                text-align: center;
                a{
                        color: #FE8C00;
                        font-weight: 400;
                        font-size: 0.11rem;
                }
            }
            li:last-child{
                border:none;    
            }
        }
    }
    .footer-links{
        margin:.1rem;
        font-size: .11rem;
        text-align: center;
        color: #646464;
        font-family: PingFangSC-Medium;
        a + a{
            padding-bottom: .1rem;
        }
        a+a{
            padding-left: .25rem;
            display: inline-block;
        }
        a:visited{
            color: #646464;
        }
    }
    .footer-copyright{
        color: #999;
        font-size: .11rem;
        text-align: center;
        position: relative;
        .hr{
            display: block;
            content: "";
            width: 100%;
            position: absolute;
            top: 50%;
            border-top: 1px solid #999;
            z-index:0;
        }
        span{
            background:#fff;
            font-size:inherit;
            padding:0 .1rem;
            position:relative;  
            a{
                color: #999;
            }
        } 
    }
}

</style>