<template>
  <div class="app-loginContainer">
    <header class="mui-bar mui-bar-nav">
      <a id="offCanvasBtn" href="#offCanvasSide" class="mui-icon mui-action-menu mui-icon-bars mui-pull-left"></a>
      <router-link to="/index" class="mui-action-back  mui-pull-left logo-img"><img src="../../assets/img/logo.png"></router-link>
      <ul class="mui-pull-right ">
        <li class="mui-pull-left myitem"><a><img src="../../assets/img/tel.png"></a></li>
        <li class="mui-pull-left myitem"><a><img src="../../assets/img/geren.png"></a></li>
        <li class="mui-pull-left myitem">
          <a class="myCart">
            <img src="../../assets/img/shopping-cart.png">
            <span class="count">0</span>
          </a>
        </li>
      </ul>
      
    </header>
    <div class="login-top">
      <h4>用户登录</h4>
      <p>开启乌镇之旅</p>
      <div class="login-tab" @click="isShow">
        <div class="border active1">
          <a>账户登录</a>
        </div>
        <div>
          <a>手机动态码登录</a>
        </div>
      </div>
    </div>
    <div class="login-bottom">
      <div class="container">
        <div class="form-item active">
          <form action="">
            <div class="login-form-item">
              <p>账号</p>
              <input type="text" name="loginName" placeholder="用户名" v-model="uname">
            </div>
            <div class="login-form-item">
              <p>密码</p>
              <input type="password" name="loginPass" placeholder="密码（6-18位字母加数字)" v-model="upwd">
            </div>
            <div class="login-form-item">
              <p>验证码</p>
              <input type="text" name="checkCode" placeholder="输入右图显示的验证码" style="width:70%" v-model="checkCode">
              <canvas class="c3" @click="showCode"></canvas>
            </div>
            <div class="login-in">
              <input type="button" name="login-in" value="登录" @click="sigin">
            </div>
          </form>
        </div>
        <div class="form-item">
          <form action="">
            <div class="login-form-item">
              <p>手机号</p>
              <input type="text" name="loginName" placeholder="请输入您的手机号码">
            </div>
            <div class="login-form-item">
              <p>验证码</p>
              <input type="text" name="checkCode" placeholder="输入右图显示的验证码" style="width:70%">
              <canvas class="c3" @click="showCode"></canvas>
            </div>
            <div class="login-form-item">
              <p>动态码</p>
              <input type="text" name="loginPass" placeholder="输入获取的动态码" style="width:70%">
              <button style="height:42px;border-radius:0;width:30%;font-size: 10px;">获取动态验证码</button>
            </div>
            <div class="login-in">
              <input type="button" name="login-in" value="登录" >
            </div>
          </form>
        </div>
        <div class="login-link">
          <div class="forget">
            <a href="#">忘记密码？</a>
          </div>
          <div class="register">
            <a href="#">免费注册</a>
          </div>
        </div>
        <div class="third-loginIn">
          <span>第三方登录</span>
          <a href="#"><img src="../../assets/img/third-qq.png"></a>
          <a href="#"><img src="../../assets/img/third-weixin.png"></a>
          <a href="#"><img src="../../assets//img/third-alipay.png"></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {Toast} from "mint-ui"
  export default{
    data(){ return {
      str:'',
      uname:'',
      upwd:'',
      checkCode:'',
      phone:''
    }},
    methods:{
      sigin(){
        var uname=this.uname;
        var upwd=this.upwd;
        var phone=this.phone;
        console.log(this.str)
        if(!uname){
          Toast("用户名不能为空！")
        }else if(!upwd){
          Toast("密码不能为空！")
        }else if(this.str==''){
          Toast("请点击输入验证码！")
        }else if((this.str.toUpperCase())!=(this.checkCode.toUpperCase())){
          Toast("请输入正确的验证码！")
        }else{
          var url="http://127.0.0.1:9000/sigin";
          this.axios.post(url,`uname=${uname}&upwd=${upwd}&phone=${phone}`).then(result=>{
            if(result.data.code==1){
              Toast(result.data.msg);
              this.$router.push('/')
            }else{
              Toast(result.data.msg);
            }
          })
        }
      },
      clickCode(){
        var c=document.querySelectorAll(".c3");
        //console.log(c)
        for(var i=0;i<c.length;i++){
          var ctx=c[i].getContext("2d");
          ctx.font="39px '微软雅黑'";
          ctx.textBaseline="top";
          ctx.fillStyle="#333";
          ctx.fillText("点击获取验证码",5,50);
          ctx.fill();
        }
        //console.log(666)
      },
      showCode(e){
        this.str='';
        var c3=e.target;
        //console.log(e.target)
        var ctx=c3.getContext("2d");
        //注意：验证码一定是由服务器程序创建  php;java;node.js  而不是canvas客户端技术创建
        //创建矩形作为验证码背景
        ctx.fillStyle=rc(180,233);
        ctx.fillRect(0,0,340,180);
        //创建随机文字4个绘制背景
        var pool="ABCDEFGHIJKLMN0123456789abcdefghijklmn";
        for(var i=0;i<4;i++){
          var c=pool[rn(0,pool.length)];
          ctx.textBaseline="top";
          ctx.font="120px SimHei";
          ctx.fillStyle=rc(60,180);
          ctx.fillText(c,i*62+5,5);
          this.str+=c;
        }
        //创建5条干扰线
        for(var i=0;i<5;i++){
          ctx.beginPath();
          ctx.strokeStyle=rc(0,255);
          ctx.moveTo(rn(0,340),rn(0,30));
          ctx.lineTo(rn(0,340),rn(0,30));
          ctx.stroke();
        }
        //创建20个干扰点
        for(var i=0;i<20;i++){
          ctx.fillStyle=rc(0,255);
          ctx.beginPath();
          ctx.arc(rn(0,340),rn(0,30),1,0,360*Math.PI/180);
          ctx.fill();
        }
        function rn(min,max){
          var n=Math.random()*(max-min)+min;
          return Math.floor(n)
        }
        function rc(min,max){
          var r=rn(min,max);
          var g=rn(min,max);
          var b=rn(min,max);
          return `rgb(${r},${g},${b}`;
        }
        console.log(this.str);
      },
      isShow(e){
        //console.log(e.target);
        var parent=e.target.parentElement;
        var loginLink=document.querySelectorAll(".form-item");
        //console.log(loginLink);
        //console.log(parent);
        parent.setAttribute("class","active1");
        //console.log(parent.nextElementSibling);
        //console.log(parent.previousElementSibling);
        if(parent.nextElementSibling!==null){
          parent.nextElementSibling.removeAttribute("class")
          //console.log(222)
          loginLink[0].className="form-item active";
          loginLink[1].className="form-item"
        }
        if(parent.previousElementSibling!==null){
          //console.log(111);
          //console.log(parent.previousElementSibling);
          parent.previousElementSibling.removeAttribute("class");
          loginLink[0].className="form-item";
          loginLink[1].className="form-item  active"
          
        }
      }
    },
    created(){
      this.$emit('public_header', false);
      this.$emit('public_footer', false);
      this.$emit('public_tabbar', false);
      this.$emit('public_float', false);
    },
    mounted(){
      this.clickCode();
    }
  }
</script>
<style scoped>
  .app-loginContainer{
    background:#fff;
    margin-bottom:-50px;
  }
  .app-loginContainer .mui-bar{
    width:100%;
    height:52px;
    background:#272831;
    padding-left:15px;
    padding-right:15px;
  }
  .logo-img{
    margin-top:6px;
  }
  .logo-img img{
    height:40px;
    margin-left:12px;
  }
  .myCart{
    position: relative;
  }
  .myCart .count{
    font-size:12px;
    color:#fff;
    width:16px;
    height:16px;
    line-height:16px;
    text-align: center;
    border-radius:50% 50%;;
    background:red;
    position: absolute;
    top:-12px;;
    right:-6px;;
  }
  .app-loginContainer .mui-pull-right .myitem img{
    width:24px;
    height:24px;
    margin-top:12px;
    margin-left:22px;
  }

  .login-top{
    height:120px;
    margin-top:52px;
    background:url("../../assets/img/login-top-bg.png") no-repeat;
    background-size:cover;
    text-align: center;
    padding-top:15px;
    position: relative;
  }
  .login-top h4 {
    padding-left: 0.613333rem;
    display: inline-block;
    background: url("../../assets/img/login-title1.png") left bottom no-repeat;
    background-size:1.29rem 1.29rem;
    font-size: 20px;
    font-weight:500;
    color: #FFFFFF;
    padding-left:25px;
  }
  .login-top p{
    font-size: 0.266667rem;
    color: #FFFFFF;
  }
  .login-tab {
    width: 100%;
    height: 1.173333rem;
    position: absolute;
    bottom: 20px;
    left: 0;
    display: flex;
    justify-content: space-around;
  }
  .login-tab .border{
    border-right:2px solid #fff;
  }
  .login-tab div{
    width:50%;
    position: relative;
  }
  .login-tab div a{
    width: 100%;
    font-size:15px;
    color: #FFFFFF;
    font-weight:600;
    letter-spacing: 0.8px;
  }
  .active1::after{
    content:'';
    width:0;
    height:0;
    border:8px solid;
    border-color:transparent transparent #fff transparent;
    position:absolute;
    bottom:-20px;
    left:50%;
  }
  .container{
    padding:20px 15px; 
  }
  .login-form-item p {
    font-size: 13px;
    color: #2A2A2F;
  }
  .login-form-item input{
    padding:20px 0 20px 12px;
    line-height:1;
    background-color:#F3F4F8 !important;
    border:1px solid #D5DAE1;
    font-size:13px;
    letter-spacing: 0.9px;
  }
  .login-link{
    height:80px;
    display:flex;
    position: relative;
    padding-bottom:20px;
    border-bottom:1px solid #ccc;
  }
  .login-link div{
    width:50%;
    height:20px;
    text-align: center;
    position:absolute;
    top:50%;
    left:50%;
  }
  .login-link div:first-child{
    border-right:1px solid #ccc;
    left:0;
  }
  .login-link div a{
    font-size:14px;
    color:#2A2A2F;
  }
  .third-loginIn{
    padding-top:20px;
  }
  .third-loginIn span{
    display: inline-block;
    height:26px;
    font-size:14px;
    color:#7E808A;
    vertical-align: text-top;
  }
  .third-loginIn a{
    display: inline-block;
    height:30px;
    line-height:30px;
    vertical-align: bottom;
  }
  .third-loginIn a img{
    width:26px;
    height:26px;
    margin-left:25px;
  }
  .form-item{
    display:none;
  }
  .active{
    display:block;
  }
  /*验证码*/
  .c3{
    width:30%;
    height:40px;
    vertical-align: center;
    position: relative;
    top:16px;
    background:#eee;
    border:1px solid #ddd;
    }
  .login-in input{
    width:100%;background:#2A2A2F;height:45px;border:0;margin-top:10px;
    color:#fff;
  }
</style>