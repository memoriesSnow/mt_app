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
          <div class ="search-entry">
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
          <div class ="cinema-item">  <!-- 这里for -->
            <div class ="title-block">
              <div class ="title">
                <span>大地影院（廊坊格林时代店）</span>
                <span class ="price-block">
                  <span class ="price">9.9</span><span class ="q">元起</span>
                </span>
              </div>
              <div class ="location-block"></div>
              <div class ="label-block"></div>
              <div class ="discount-block"></div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.topbar{
  border-bottom: 1px solid #e6e6e6;
  height: .44rem;
  width:100%;
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
  background: red;
  margin-top:.4rem;
  margin-bottom: .55rem;
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
}
</style>