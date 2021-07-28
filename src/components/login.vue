<template>
    <div class ="login">
        <header class ="top_logo">
            <div class ="logo_container">
                <img src="https://p1.meituan.net/travelcube/86c5b686264c3cda292c30f623970f955983.png"/>
            </div>
        </header>
        <div class ="content">
            <div class ="login_box">
                <p class ="account_p"><input class="userName" type ="text" placeholder="请输入账号" maxlength="16" v-model="username" /></p>
                <p class ="password_p"><input class="passWord" type ="password" placeholder="请输入密码" maxlength="12" v-model="password" /></p>
            </div>
            <div class ="button_box">
                <button class="login_button" @click="login()">登录</button>
                <p class ="no_account">没有账号？去<router-link to="/regist">注册！</router-link></p>
            </div>
        </div>
    </div>
</template>

<script>
import { listObj } from '../server'
export default {
    data(){
        return{
            username:'',
            password:''
        }
    },
    methods:{
        login(){
            let params = {
                userName:this.username,
                password:this.password
            }
            listObj.loginAccount(params).then(res=>{
                console.log(res);
            })
        }
    }
}
</script>

<style lang="less" scoped>
.top_logo{
    height: 1.5rem;
    box-sizing: border-box;
    padding-top: 0.2rem;
    text-align: center;
    margin-bottom:.4rem;
    .logo_container{
        margin: 0 auto;
        // background: url(//p0.meituan.net/codeman/ae846a3….png) 50% 50%;
        // background-size: cover;
        width: .8rem;
        height: .8rem;
        border-radius: 50%;
        margin-bottom: 0.6rem;
        img{
            width:100%;
            height:100%;
        }
    }
}
.content{
    height:3rem;
    // background:red;
    .login_box{
        font-size:.2rem;
        .account_p{
            height:.4rem;
            margin:.2rem;
        }
        .password_p{
            height:.4rem;
            margin:.2rem;
        }
    }
    .button_box{
        width:80%;
        height:1rem;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        font-size:.15rem;
        margin:0 auto;
        .login_button{
            width:100%;
            height:.45rem;
            
            background:#FFE77B;
            border:none;
            border-radius:.1rem;
        }
        .no_account{
            margin-top:.1rem;
        }
    }
}
.userName,.passWord{
    border:0;
    border-bottom:.01rem solid #E5E5E5;
    font-size:.2rem;
    padding-bottom:.04rem;
    box-sizing:border-box;
    width:90%;
}
.userName:focus,.passWord:focus{
    border-bottom:.01rem solid #fe8300;
}
input::-moz-placeholder{
    color:#666;
    font-size:16px;
}
.userName::placeholder,.passWord::placeholder{
    color:#ccc;
    font-size:.18rem;
}
</style>