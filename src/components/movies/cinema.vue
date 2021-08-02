<template>
  <div class ="cinema">
      <div class ="navbar">
        <van-nav-bar 
            title="影院"
        />
      </div>
      <div class ="topbar">
        <div class ="gray_bg">
          <div class ="city-entry">
            <span class ="city-name">廊坊</span>
            <i class ="city-entry-arrow"></i>
          </div>
          <div class ="search-entry" @click="cinemaSearch()">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAwFJREFUSA3FVs1qU0EUTibBRQiCRF3UB3BTcFHwJ0XRJ+gDhDaQ5vcJ3PgCfYL80AYSyQP4BIKQiosuhLoQXOjCbqQIJUgoyY3fdzNnmCRzk3uvBQfmzrlzzvm+OTNzz7mJxH9qyTC83W733mQyeTKbzbbQc8lk8hL9Ip1OfyqVSr/CYCzbBBKDQHU6nX2MZfQ8HNWyM949LOAU/bharb7F6DlsnFNOYhDmp9NpGx7bTi/35HkqlaphAadu9eLsCjFIS57nNRHlLct0AnmIiL5ivETPQf8Q4y56Gt1v0F8rpRog78pc0LhATFJEemIZXwHoKJvNNguFwm9r3hcHg8Gd0WjUwEJfY+K26BH54SZyQ8ztBcB7K9IzAO01Go2fAhg0NpvNB9C9Q9+hjY781bpt9y8MyBTP1CZFpC/CkJKIdrSHyMUmiKPxXBeSJvOb2mq1DiDLRbqCvFer1f7QIGzT9nuwpz/bNnZxfy6uPv0VYWvKouKZho1UfGTUkR/JOyI3uDIno2JygMEzPTHhRRJlnFH78yvglueJ78JRzEhQyFkMXbfX5Rg0p/2HWi/4K+YKq9qSWf2dymvs0cax8W1AEuesCSaHm2gGZwnfYCuszhhh1l6EMYohGJwlfANF4gt5w+qYBv+52Tg2vg2sWNowIVVll2nQNogqa3/mcDZP48/frKdiPcWqpKKkmXstfWRR+/uFg7hB9VpSpikMTPg690YmpR/834gjiI9FXh79IoEzUUibn6GUtHnG3Bslbbbb7QxIfwDjriY5r9frj0Aux7jALSnTYxGH0bXW7gDkQ9jIdaRfLFLCfEefUXA1UxapvKl6bBF1EXUZAa0sYIFYyBFt7D8QHBu/kuebyFeINXnsf65KpfIR94WXqrSO3ElMB33hDrBNh5DX/mVCf4It7ctFwntyE3kgsbXaRL/fvz8ejx8DMPR/9SbyUMT2IqLIa8mjAMWxdZB/y2QyT80/cRzQMD78lNDKOHOa84fwZbFYtCtiGJj4Noy81+uZcvkXH+aXwmK6+EsAAAAASUVORK5CYII="/>
            <span>搜影院</span>
          </div>
        </div>
      </div>
      <div class ="nav-wrap">
        <div class ="tab">
          <div class ="item">
            <div class ="test">全城<span class ="drop"></span></div>
          </div>
          <div class ="item">
            <div class ="test">品牌<span class ="drop"></span></div>
          </div>
          <div class ="item">
            <div class ="test">特色<span class ="drop"></span></div>
          </div>
        </div>
      </div>
      <div class ="cinema-list">
        <div class ="list-wrap">
          <div class ="cinema-item" v-for="(item,index) in cinemaList" :key="index">  <!-- 这里for -->
            <div class ="title-block">
              <div class ="title">
                <span>{{ item.cinema_name}}</span>
                <span class ="price-block">
                  <span class ="price">{{ item.price }}</span><!-- <span class ="q">元起</span> -->
                </span>
              </div>
              <div class ="location-block">
                <div class="flex line-ellipsis">{{ item.address }}</div>
                <div class="distance">{{ item.distance }}</div>
              </div>
              <div class ="label-block">
                <div class="endorse">改签</div>
                <div class="vipTag">折扣卡</div>
              </div>
              <div class ="discount-block">
                <div class ="discount-label">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg=="/>
                </div>
                <div class ="discount-label-text">开卡特惠，首单1张最高立减6元</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { listObj } from '../../server'
export default {
  data(){
    return{
      cinemaList:[]
    }
  },
  methods:{
    getCinemas(){
      listObj.getCinemaList().then(res=>{
        this.cinemaList = res;
        console.log(this.cinemaList)
      })
    },
    cinemaSearch(){
      this.$router.push('cinema_search');
      this.$bus.$emit('send',this.cinemaList)
    }
  },
  mounted(){
    this.getCinemas()
  }
}
</script>

<style lang="less" scoped>
.navbar{
  position:fixed;
  width:100%;
  z-index:1;
  top:0;
}
::-webkit-scrollbar {
/*隐藏滚轮*/
    display: none;
}
.topbar{
  border-bottom: 1px solid #e6e6e6;
  height: .44rem;
  width:100%;
  position:fixed;
  top:.5rem;
  z-index:1;
  .gray_bg{
    background: #f5f5f5;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height:.44rem;
    -webkit-box-pack: justify;
    justify-content: space-between;
    .city-entry{
      padding-left: .15rem;
      font-size: .15rem;
      color: #666;
      display: flex;
      align-items: center;
      display:none;
      .city-name{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: .7rem;
      }
      .city-entry-arrow{
        width: 0;
        height: 0;
        border: .04rem solid #b0b0b0;
        border-left-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        display: inline-block;
        margin-left: .04rem;
        margin-top: .05rem;
      }
    }
    .search-entry{
      flex-grow: 1;
      display: flex;
      background-color: #fff;
      justify-content: center;
      align-items: center;
      height: .28rem;
      font-size: .13rem;
      color: #b2b2b2;
      margin-left: .18rem;
      border: .5px solid #e6e6e6;
      border-radius: .05rem;
      margin-right: .15rem;
      img{
        width: .14rem;
        height: .14rem;
        margin-left:.03rem;
        margin-right: .04rem;

      }
    }
  }
}
.nav-wrap{
  position:fixed;
  top:.94rem;
  width: 96%;
  height: .4rem;
  z-index: 10;
  background-color: #fff;
  .tab{
    display:flex;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAABlBMVEUAAADh4eGdLxMbAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjYGA4AAAAxADBPcXUKgAAAABJRU5ErkJggg==) 0 bottom repeat-x;
    .item{
      -webkit-box-flex: 1;
      flex: 1;
      text-align: center;
      height: .4rem;
      position: relative;
      white-space: nowrap;
      overflow: hidden;
      font-size: .13rem;
      text-overflow: ellipsis;
      color: #777;
      // border-right:solid 1px;
      display:flex;
      align-items: center;
      justify-content: center;
      .test{
        width:100%;
        height:50%;
        border-right:solid 1px gray;
        line-height: .2rem;
      }
      .drop{
        display: inline-block;
        position: absolute;
        top:.18rem;
        width: 0;
        height: 0;
        margin-left: .04rem;
        border: .04rem solid transparent;
        border-top-color: #b0b0b0;
      }
    }
  }
}
.cinema-list{
  width:96%;
  margin-top:.4rem;
  margin-bottom: .55rem;
  position:relative;
  top:1rem;
  .list-wrap{
    margin-top: 0;
    min-height: 6rem;
    .cinema-item{
      padding: .13rem .15rem .15rem 0;
      margin-left: .15rem;
      background-color: #fff;
      position: relative;
      overflow: hidden;
    } 
  }
}
.title-block{
  .title{
    height: .23rem;
    line-height: .23rem;
    font-size: .16rem;
    color: #000;
    .price-block{
      padding-top: .09rem;
      padding-left: .03rem;
      .price{
        font-size: .18rem;
        color: #f03d37;
        line-height:1.5;
      }
      .q{
        margin-left:.03rem;
        font-size: .11rem;
        color: #f03d37;
        line-height:1.5;
      }
    }
  }
  .location-block{
    margin-top:.06rem;
    font-size: .13rem;
    color: #666;
    display:flex;
    line-height:1.5;
    .line-ellipsis{
      flex:1;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .distance{
      margin-left:.05rem;
    }
  }
  .label-block{
    height: .17rem;
    line-height: .17rem;
    margin-top: .04rem;
    margin-bottom: .04rem;
    overflow: hidden;
    font-size: 0;
    flex-shrink: 0;
    .endorse{
      color: #589daf;
      border: 1px solid #589daf;
    }
    .vipTag{
      color: #f90;
      border: 1px solid #f90;
    }
  }
  .label-block>div{
    position: relative;
    display: inline-block;
    padding: 0 .03rem;
    height: .15rem;
    line-height: .15rem;
    border-radius: .02rem;
    font-size: .06rem;
    margin-right:.05rem;
  }
  .discount-block{
    color: #999;
    margin-bottom: .04rem;
    display:flex;
    align-items: center;
    justify-content: flex-start;
    .discount-label{
      width: .15rem;
      height: .14rem;
      position: relative;
      top: .03rem;
      display:flex;
      img{
        width:100%;
      }
    }
    .discount-label-text{
      margin-left: 0;
      font-size: .11rem;
      margin-left:.05rem;
      margin-top:.05rem;
    }
  }
}
</style>