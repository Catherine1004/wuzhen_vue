<template>
  <div class="app-container"   @click="fun()">
    <!-- 顶部导航栏 -->
      <div id="offCanvasWrapper" class="mui-off-canvas-wrap mui-draggable" v-if="header_show">
        <!--菜单部分-->
         <!-- <aside id="offCanvasSide" class="mui-off-canvas-right">
          <div id="offCanvasSideScroll" class="mui-scroll-wrapper">
            <div class="mui-scroll">
              <ul class="mui-table-view mui-table-view-chevron mui-table-view-inverted">
                <li class="mui-table-view-cell">
                  <a class="mui-navigate-right">
                    传统乌镇
                  </a>
                </li>
                <li class="mui-table-view-cell">
                  <a class="mui-navigate-right">
                    度假乌镇
                  </a>
                </li>
                <li class="mui-table-view-cell">
                  <a class="mui-navigate-right">
                    文化乌镇
                  </a>
                </li>
                <li class="mui-table-view-cell">
                  <a class="mui-navigate-right">
                    会展乌镇
                  </a>
                </li>
                <li class="mui-table-view-cell">
                  <a class="mui-navigate-right">
                    互动体验
                  </a>
                </li>
                <li class="mui-table-view-cell">
                  <a class="mui-navigate-right">
                  活动公告
                </a>
                </li>
                <li class="mui-table-view-cell">
                  <a class="mui-navigate-right">
                  出行锦囊
                </a>
                </li>
                <li class="mui-table-view-cell">
                  <a class="mui-navigate-right">
                  优化服务
                </a>
                </li>
                <li class="mui-table-view-cell">
                  <a class="">
                  乌镇旅业
                </a>
                </li>
                <li class="mui-table-view-cell">
                  <a class="">
                  巾帼文明岗
                </a>
                </li>
                <li class="mui-table-view-cell">
                  <span>语言版本</span>
                  <input type="button" value="中文" class="active">
                  <input type="button" value="English">
                  <input type="button" value="Deutschland">
                </li>
              </ul>
            </div>
          </div>
        </aside> -->
        <div class="mui-inner-wrap">
            <aside id="offCanvasSide" class="mui-off-canvas-right">
                <div id="offCanvasSideScroll" class="mui-scroll-wrapper">
                  <div class="mui-scroll">
                    <ul class="mui-table-view mui-table-view-chevron mui-table-view-inverted">
                      <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                          传统乌镇
                        </a>
                      </li>
                      <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                          度假乌镇
                        </a>
                      </li>
                      <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                          文化乌镇
                        </a>
                      </li>
                      <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                          会展乌镇
                        </a>
                      </li>
                      <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                          互动体验
                        </a>
                      </li>
                      <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                        活动公告
                      </a>
                      </li>
                      <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                        出行锦囊
                      </a>
                      </li>
                      <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                        优化服务
                      </a>
                      </li>
                      <li class="mui-table-view-cell">
                        <a class="">
                        乌镇旅业
                      </a>
                      </li>
                      <li class="mui-table-view-cell">
                        <a class="">
                        巾帼文明岗
                      </a>
                      </li>
                      <li class="mui-table-view-cell">
                        <span>语言版本</span>
                        <input type="button" value="中文" class="active">
                        <input type="button" value="English">
                        <input type="button" value="Deutschland">
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
             <header class="mui-bar mui-bar-nav">
            <!-- <router-link to="/home" class="mui-action-back  mui-pull-left logo"><img src="./assets/home/logo2.png"></router-link> -->
            <a id="offCanvasBtn" href="#offCanvasSide" class="mui-icon mui-action-menu mui-icon-bars mui-pull-right"></a>
            <ul class="mui-pull-right ">
              <li class="mui-pull-left mycontact"><a><img src="./assets/home/sousuo1.png"></a></li>
              <li class="mui-pull-left mycontact"><a><img src="./assets/home/dianhau1.png" class="dianhua"></a></li>
              <li class="mui-pull-left mycontact"><router-link  to="/index" class="yuding" >即刻预定</router-link></li> 
            </ul>
          </header> 
          <router-view v-on:public_header="public_header" v-on:public_footer="public_footer" v-on:public_float="public_float" v-on:public_tabbar="public_tabbar"></router-view> 
        </div>
        
      </div>
      <!-- 容器显示不同组件 -->
     
    
    <!-- 底部右侧固定（会话、返回顶部） -->
    <div class="hg-float-btn" v-if="float_show">
      <span><img src="./assets/home/floatbtn1.png"></span>
      <span  @click="toTop" class="toTop"><img src="./assets/home/floatbtn2.png"></span>
    </div>
    <!-- 版权 -->
    <div class="footer" v-if="footer_show">
      <span class="sharebox">
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
      </span>
      <div class="foot">
        <ul>
          <li><a href="#">版权声明&nbsp;&nbsp;|</a></li>
          <li><a href="#">&nbsp;&nbsp;网站地图&nbsp;&nbsp;|</a></li>
          <li><a href="#">&nbsp;&nbsp;友情链接&nbsp;&nbsp;|</a></li>
          <li><a href="#">&nbsp;&nbsp;媒体专区&nbsp;&nbsp;|</a></li>
          <li><a href="#">&nbsp;&nbsp;<img src="./assets/home/i_lo2.gif"></a></li>
        </ul>
        <p>乌镇旅游股份有限公司&copy;版权所有 | 浙ICP备09047744号</p>
      </div>
    </div>
    <!-- 底部导航栏 -->
    <nav class="mui-bar mui-bar-tab" v-if="tabbar_show">
			<a id="defaultTab" class="mui-tab-item mui-active">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
      </a>
			<a id="defaultTab2" class="mui-tab-item">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
      </a>
	  </nav>
  </div>
</template>
<script>
  import mui from './lib/mui/js/mui.js'
  export default{
    data(){return {
      header_show:true,
      footer_show:true,
      tabbar_show:true,
      float_show:true
    }},
    methods:{
      toTop(){
        document.documentElement.scrollTop=document.body.scrollTop=0;
        //console.log(document.documentElement);
        //console.log(document.body);
      },
      //是否显示头部
      public_header:function (bool) {
        this.header_show = bool;
      },
      //是否显示底部
      public_footer:function (bool) {
        this.footer_show = bool;
      },
      public_tabbar:function (bool) {
        this.tabbar_show = bool;
      },
      public_float:function (bool) {
        this.float_show = bool;
      },
      ToIndex(){
        this.$router.push("/index");
        console.log(6666)
      },
      fun(){console.log(555)}

    },
      
    created(){
      mui.init({
        swipeBack:true, //启用右滑关闭功能
      });
      document.addEventListener('gohome', function() {
        var defaultTab = document.getElementById("defaultTab");
        var defaultTab2 = document.getElementById("defaultTab2");
        //模拟首页点击
        mui.trigger(defaultTab, 'tap');
        //切换选项卡高亮
        var current = document.querySelector(".mui-bar-tab>.mui-tab-item.mui-active");
        if (location.href!="http://127.0.0.1:9001/#/home") {
          defaultTab.classList.remove('mui-active');
          defaultTab2.classList.add('mui-active');
          console.log(555)
        }
      });
    },
    mounted(){
      mui('.mui-bar-tab').on("tap",".mui-tab-item",function(e){
        var defaultTab = document.getElementById("defaultTab");
        var current = document.querySelector(".mui-bar-tab>.mui-tab-item.mui-active");
        if(e.target.className=="mui-icon mui-icon-home"){
          location.href="http://127.0.0.1:9001/#/home" ;
          
        }else if(e.target.className=="mui-icon mui-icon-contact"){
          location.href="http://127.0.0.1:9001/#/index/login";
          
          if(e.target!=current) {
            console.log(111)
            current.classList.remove('mui-active');
            defaultTab.classList.add('mui-active');
          }else{
            current.classList.add('mui-active');
            defaultTab.classList.remove('mui-active');
          } 
        }
      })
    } 
  }
</script>
<style>
  /* .app-homeContainer{
    width: 0;
    height:0;
  } */
  .app-container{
    padding-bottom:50px;
    overflow-x:hidden;
    background-color:#f3f3f3;
  }
  #offCanvasWrapper{
    width:100%;
   /* height:50px;*/
    background:#272831;
  }

  .app-container .mui-off-canvas-wrap .mui-bar{
    width:100%;
    background:#272831;
    padding-left:15px;
    padding-right:15px;
  }
  .app-container .logo{
    width:20px;
    margin-top:8px;
  }
  .logo img{
    width:100%;
    height:35px;
  }
  #offCanvasBtn{
    color:white;
  }
  ul,li{
    list-style:none;
    margin:0;
    padding:0;
  }
  ul li.mycontact{
    height:50px;
    line-height:50px;
    padding:0 10px;
    font-size:12px;
    vertical-align: middle;
  }
  ul li.mycontact a{
    height:50px;
    line-height:50px;
    
  }
  .mycontact img{
    /* display: table-cell;
    text-align: center;
    vertical-align: middle; */
    margin-top:13px;
    margin-bottom:13px;
  }
  .dianhua{
    width:17px;
    height:18px;
  }
  .yuding{
    background: #db1900;
    padding: 6px 10px;
    font-size: 12px;
    color:white;
    margin-right:12px;
  }
  /* 侧边返回顶部*/
  .hg-float-btn {
    position: fixed;
    right: 20px;
    bottom: 50px;
    display:flex;
    flex-direction: column;
  }
  .hg-float-btn span img{
    width:44px;
    height:44px;
  }
  /* 底部版权 */
  .footer{
    background-color:#272831;
    padding:10px 15px;
  }
  .sharebox a{
    width:18px;
    height:18px;
    display: inline-block;
    outline: 0;
    border-radius: 5px;
    margin-right:5px;
  }
  .sharebox a:first-child{
    background:#9E9E9E url("assets/home/weibo-shouji.png") no-repeat;
    background-size:100% 100%;
  }
  .sharebox a:nth-child(2){
    background:#9E9E9E url("assets/home/weixin-shouji.png") no-repeat;
    background-size:100% 100%;
  }
  .sharebox a:nth-child(3){
    background:#9E9E9E url("assets/home/face-shouji.png") no-repeat ;
    background-size:100% 100%;
  }
  .sharebox::after{
    content:'';
    /* visibility: hidden; */
    display:block;
    clear: both;
    height:0;
    border:.5px solid #3D3D47;
    margin-bottom:5px;
  }
  .foot ul li{
    float:left;
  }
  .foot ul li a{
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #7E808A;
    letter-spacing: 0.8px;
    line-height: 12px;
  }
  .foot ul li a img{
    width:16px;
    vertical-align: bottom;
  }
  .foot p{
    clear: both;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #7E808A;
    letter-spacing: 0.8px;
    line-height: 14px;
    padding-top:5px;
  }
</style>
