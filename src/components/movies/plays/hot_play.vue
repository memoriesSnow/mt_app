<template>
  <div class="hot_play">
    <div class="top-rated-wrap">
      <p class="title">最受好评电影</p>
      <div class="top-rated-list">
        <div class="top-rated-item" v-for="item in 10" :key="item"><!-- 这里for -->
            <div class ="default-img-bg">
                <img src="https://p1.meituan.net/170.230/movie/6876f0a4db61cab652fdc3d3ed14e94c4924473.jpg" />
                <span class ="wish-bg"></span>
                <span class ="score">
                    观众评分&nbsp;&nbsp;
                    <span class ="rated-score">9.5</span>
                </span>
            </div>
            <h5 class ="line-ellipsis">中国先生</h5>
        </div>
      </div>
    </div>
    <div class="list-wrap">
        <div class="item" v-for="item in 10" :key="item">
            <div class ="main-block">
                <div class ="imgBox">
                    <img src="https://p0.meituan.net/movie/cba20984e8e4423598913077e515b6121686728.jpg@1l_1e_1c_128w_180h"/>
                </div>
                <div class ="movieInfo">
                    <div class ="content">
                        <div class ="movie_title">
                            <div class ="mot">白蛇2：青蛇劫起</div>
                            <span class ="version"></span>
                        </div>
                        <div class ="col">
                            <div class ="scored">
                                <span class ="score-suffix">观众评</span>
                                <span class ="grade">9.2</span>
                            </div>
                            <div class ="actor">主演: 唐小喜,张福正,魏超</div>
                            <div class ="show-info">今天35家影院放映374场</div>
                        </div>
                    </div>
                    <div class ="button">
                        购票
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.hot_play {
  width: 96%;
  font-size: 0.2rem;
}
::-webkit-scrollbar {
/*隐藏滚轮*/
    display: none;
}
.top-rated-wrap {
  width: 100%;
  height: 2rem;
  padding: 0.12rem 0 0.12rem 0.15rem;
  .title{
    font-size: .14rem;
    color: #333;
    margin-bottom: .12rem;
    text-align: left;
  }
  .top-rated-list{
    overflow: scroll;
    white-space: nowrap;
    .top-rated-item{
        display: inline-block;
        width: .85rem;
        overflow: hidden;
        margin-right: .1rem;
        .default-img-bg{
            width: .85rem;
            height: 1.15rem;
            position: relative;
            margin-bottom: .06rem;;
            img{
                width:100%;
                height:100%;
            }
        }
        .wish-bg{
            width: 100%;
            height: 35px;
            position: absolute;
            bottom: 0;
            left:0;
            background-image: linear-gradient(-180deg,rgba(77,77,77,0),#000);
        }
        .score{
            position: absolute;
            left: .04rem;
            bottom: .02rem;
            color: #faaf00;
            font-size: .11rem;
            font-weight: 600;
        }
        h5{
            font-size: .13rem;
            color: #222;
            margin-bottom: .03rem;
            text-align: left;
        }
    }
  }
}
.list-wrap{
    .item{
        padding-left: .15rem;
        background-color: #fff;
        .main-block{
            position: relative;
            width:100%;
            display:flex;
            justify-content: space-between;
            .imgBox{
                width: .64rem;
                height: .9rem;
                margin-top: .12rem;
                img{
                    width:100%;
                    height:100%;
                }
            }
            .movieInfo{
                width:2.7rem;
                height:1.1rem;
                display:flex;
                align-items:center;
                justify-content: space-between;
                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzhCNEEzQTE0NzNBMTFFNkEyMkFFN0M2MDc0NjIyN0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzhCNEEzQTA0NzNBMTFFNkEyMkFFN0M2MDc0NjIyN0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2Mzg3REIwMzQ3MzcxMUU2QTIyQUU3QzYwNzQ2MjI3RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2Mzg3REIwNDQ3MzcxMUU2QTIyQUU3QzYwNzQ2MjI3RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoL90/MAAAAZSURBVHjaYvr//z8DCLM8evToPwMQAAQYAGuLCaa37ZaAAAAAAElFTkSuQmCC) 0 bottom repeat-x;
                .content{
                    width:2.07rem;
                    height:.88rem;
                }
                .button{
                    width:.47rem;
                    height:.27rem;
                    background:#f03d37;
                    display:flex;
                    align-items: center;
                    justify-content: center;
                    color:#fff;
                    box-sizing: border-box;
                    border-radius: .04rem;
                    font-size: .12rem;
                }
            }
        }
    }
}
.movie_title{
    max-height:.24rem;
    margin-bottom: .03rem;
    line-height: .24rem;
    overflow: hidden;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    .mot{
        font-size: .17rem;
        color: #333;
        font-weight: 700;
        padding-right: .05rem;
        flex-shrink: 1;
    }
    .version{
        width:.43rem;
        height:.14rem;
        background-image:url('data:image/png;base64,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');
        background-size: contain;
        margin-left:.1rem;
    }
}
.col{
    .scored{
        .score-suffix{
            font-size: .13rem;
            color: #666;
        }
        .grade{
            font-weight: 700;
            color: #faaf00;
            font-size: .15rem;
        }
    }
    .actor{
        font-size: .13rem;;
        color: #666;
        margin-top:.06rem;
        line-height:.15rem;
    }
    .show-info{
        font-size: .13rem;
        color: #666;
        margin-top:.06rem;
        line-height:.15rem;
    }
}
</style>