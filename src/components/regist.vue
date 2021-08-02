<template>
  <div class="regist">
    <header class="navbar">
      <div class="nav_left">
        <a href="javascript:history.back()">
          <img
            src="https://p1.meituan.net/travelcube/53361fd0bb6b333e779377789a8d669e531.png"
            class="icon_back"
          />
        </a>
      </div>
      <span class="nav_header">注册账号</span>
      <div class="nav_right">
        <a>
          <img
            src="https://p0.meituan.net/travelcube/7289ad16274ae18417b84c916bb6a711169.png"
            class="icon_back"
          />
        </a>
      </div>
    </header>
    <div class="content">
      <header class="top_logo">
        <div class="logo_container">
          <img
            src="https://p1.meituan.net/travelcube/86c5b686264c3cda292c30f623970f955983.png"
          />
        </div>
      </header>
      <div class="login_box">
        <p class="account_p">
          <input
            class="userName"
            type="text"
            placeholder="请输入账号(6-14位英文字母，数字)"
            maxlength="16"
            v-model="username"
          />
        </p>
        <p class="password_p">
          <input
            class="passWord"
            type="password"
            placeholder="请输入密码(6-10位英文字母，数字)"
            maxlength="20"
            v-model="passWord"
          />
        </p>
        <p class="repeatPassword_p">
          <input
            class="repeatPassword"
            type="password"
            placeholder="请再次输入密码"
            maxlength="20"
            v-model="repeatPassword"
          />
        </p>
        <p class="email_p">
          <input
            class="email"
            type="text"
            placeholder="请输入邮箱"
            v-model="email"
          />
        </p>
      </div>
      <div class="button_box">
        <button class="login_button" @click="validater()">注册</button>
      </div>
    </div>
  </div>
</template>

<script>
import { listObj } from "../server/index.js";
import { Toast } from 'vant';
export default {
  data() {
    return {
      username: "",
      passWord: "",
      repeatPassword: "",
      email: "",
      userNameReg: /^[A-Za-z0-9_]{5,16}$/,
      passwordReg: /^[[A-Za-z0-9_]{6,20}$/,
      emailReg: /^[A-Za-z0-9_]{3,11}@[A-Za-z0-9_]{2,6}\.com$/,
    };
  },
  methods: {
    //  调用注册接口，提交数据至后台
    commitInfo() {
      console.log(this.email);
      let parmas = {
        userName: this.username,
        password: this.passWord,
        repeatPassword: this.repeatPassword,
        email: this.email,
      };
      listObj.registAccount(parmas).then((res) => {
        console.log(res);
        Toast('注册成功');
        this.$router.push('login');
      });
    },
    validater() {
      let username = this.username.match(this.userNameReg);
      let passWord = this.passWord.match(this.passwordReg);
      let email = this.email.match(this.emailReg);
      if (username && passWord && email) {
        this.passWord == this.repeatPassword ? this.commitInfo() : Toast('密码不太一样');
      } else {
        if(!username) Toast("用户名格式错误")
        if(!passWord) Toast('密码格式错误')
        if(!email) Toast('邮箱错误')
      }
    },
  },
};
</script>

<style lang="less" scoped>
.navbar {
  height: 0.5rem;
  background-image: linear-gradient(135deg, #ffd000 0%, #ffbd00 100%);
  display: flex;
  .nav_left {
    width: 0.95rem;
    height: 0.5rem;
    line-height: 0.5rem;
    a {
      height: 0.5rem;
      width: 0.23rem;
      line-height: 0.5rem;
      position: absolute;
      left: 0.1rem;
      /* padding: 0 .3rem; */
      .icon_back {
        width: 0.1rem;
        height: 0.18rem;
        position: relative;
        top: -0.25rem;
      }
    }
  }
  .nav_right {
    width: 0.95rem;
    height: 0.5rem;
    line-height: 0.5rem;
    a {
      height: 0.5rem;
      width: 0.23rem;
      line-height: 0.5rem;
      position: absolute;
      right: 0.15rem;
      /* padding: 0 .3rem; */
      .icon_back {
        width: 0.24rem;
        height: 0.24rem;
        position: relative;
        top: -0.24rem;
      }
    }
  }
  .nav_header {
    font-family: PingFangSC-Regular;
    font-size: 0.16rem;
    color: #222222;
    flex: 1;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align:center;
  }
}
.content {
  height: 3rem;
  margin-top: 0.2rem;
  .login_box {
    font-size: 0.2rem;
    .account_p,
    .password_p,
    .repeatPassword_p,
    .email_p {
      height: 0.4rem;
      margin: 0.2rem;
    }
  }
}
.userName,
.passWord,
.repeatPassword,
.email {
  border: 0;
  border-bottom: 0.01rem solid #e5e5e5;
  font-size: 0.2rem;
  padding-bottom: 0.04rem;
  box-sizing: border-box;
  width: 90%;
}
.userName:focus,
.passWord:focus,
.repeatPassword:focus,
.email:focus {
  border-bottom: 0.01rem solid #fe8300;
}
input::-moz-placeholder {
  color: #666;
  font-size: 16px;
}
.userName::placeholder,
.passWord::placeholder,
.repeatPassword::placeholder,
.email::placeholder {
  color: #ccc;
  font-size: 0.18rem;
}
.top_logo {
  height: 1.5rem;
  box-sizing: border-box;
  padding-top: 0.2rem;
  text-align: center;
  margin-bottom: 0.4rem;
  .logo_container {
    margin: 0 auto;
    // background: url(//p0.meituan.net/codeman/ae846a3….png) 50% 50%;
    // background-size: cover;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    margin-bottom: 0.6rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.button_box {
  width: 80%;
  height: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  font-size: 0.15rem;
  margin: 0 auto;
  .login_button {
    width: 100%;
    height: 0.45rem;
    background: #ffe77b;
    border: none;
    border-radius: 0.1rem;
  }
}
</style>