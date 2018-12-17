<template>
  <div class="app-homeContainer">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in imageList" :key="item.cid">
        <router-link :to="item.href"><img :src="item.img" class="lunbo"></router-link>
      </mt-swipe-item>
    </mt-swipe>
    <div class="textContainer">
      <div class="d-title">乌镇动态</div>
      <div class="news">
        <ul class="list">
          <li class="list-item">刘若英跟我走｜英小姐限定版乌镇演唱会</li>
          <li class="list-item">“他们都唱从前慢”音乐会将于12月21日正式上演 | 乌镇 · 旅讯</li>
          <li class="list-item">东栅：年华似水，匆匆一瞥。| 乌镇 · 玩耍</li>
        </ul>
      </div>
    </div>
    <!-- 卡片 -->
    <div class="mui-card" v-for="item in themeList" :key="item.tid">
      <div class="mui-card-header mui-card-media" style="padding:0;height:240px">
        <img :src="item.img_url">
      </div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>{{item.title}}</p>
          <p>{{item.subtitle}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <a class="mui-card-link" @click="jumpToVac(item.tid)">了解更多</a> 
        <!-- <a class="mui-card-link a1">了解更多</a> -->
        
      </div>
    </div>
    <!-- 九宫格 -->
		<h1 class="title">出行锦囊</h1>
		<div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/tour">
                  <span class="mui-icon"><img src="../../assets/home/youji-1.png"></span>
                  <div class="mui-media-body">旅游攻略</div></router-link></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                  <span class="mui-icon"><img src="../../assets/home/piaowu-1.png"></span>
                  <div class="mui-media-body">票务信息</div></a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                  <span class="mui-icon"><img src="../../assets/home/dianhua-1.png"></span>
                  <div class="mui-media-body">常用电话</div></a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                  <span class="mui-icon"><img src="../../assets/home/luxian-1.png"></span>
                  <div class="mui-media-body">景区交通</div></a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                  <span class="mui-icon"><img src="../../assets/home/jiaotong-1.png"></span>
                  <div class="mui-media-body">周边交通</div></a></li>
      </ul> 
    </div>
    
  </div>
</template>
<script>
  import mui from '../../lib/mui/js/mui.js';
  export default{
    
    data(){ return {
      imageList:[],
      themeList:[]
    }},
    methods:{
      /*轮播图片*/
      getImage(){

        var url="http://127.0.0.1:9000/imagelist";
        this.axios.get(url).then(res=>{
          this.imageList=res.data;
          //console.log(this.imageList);
        })
      },
      /*新闻动态*/
      newsLive(){
        var ul=document.querySelector(".list");
        var li=document.querySelectorAll(".list-item");
        var i=0;
        var move=0;
        var timer=null;
        //console.log(ul);
        //console.log(li);
        function task(){ 
          move--;
            if(move<-40){
              if(i<2){
                i++;
                move=0;
              }else{
                i=0;
              }
            }
          for(var j=0;j<li.length;j++){
            li[j].style.opacity=0;
            li[j].style.marginTop=0;
            li[i].style.opacity=1;
            //console.log(i,li[i]);
          }
          li[i].style.marginTop=move+"px";
        }
          setInterval(task,80);
      },
      getThemeList(){
        console.log(mui)
        var url="http://127.0.0.1:9000/themelist";
        this.axios.get(url).then(res=>{
          this.themeList=res.data;
          //console.log(this.themeList);
        })
      },

     jumpToVac(tid){
       
        this.$router.push("/home/vacation?tid="+tid);
       // console.log(tid);
      },
    
   
      
    },
    created(){
      this.getImage();
      this.$emit('public_header', true);
      this.$emit('public_footer', true);
      this.$emit('public_tabbar', true);
      this.$emit('public_float', true);
    },
    mounted(){
      this.newsLive();
      this.getThemeList();
    }
  }
</script>
<style scoped>
  .app-homeContainer .mint-swipe{
    height:312px;
  } 
  .app-homeContainer .lunbo{
    width:100%;
    height:312px;
  } 
  .textContainer{
    margin:16px 15px 0 15px;
  }

  /* 新闻动态 */
  .d-title{
    font-size:20px;
    line-height:36px;
    font-family:"SourceHanS-S_Be206bf1321a330";
    letter-spacing: 0.8px;
    color:#3e3e3e;
  }
  ul,li{
    list-style:none;
  }
  div.news{
    height:55px;
    overflow:hidden;
    position:relative;
    border-bottom:1px solid #e2e2e2;
  }
  ul.list{
    position:relatieve;
  }
  ul.list::after{
    content:'';
    display: table;
    clear:both;
  }
  .list .list-item{
    height: 44px;
    width:345px;
    line-height:44px;
    letter-spacing: .68px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-size:14px;
    color:#2e2e2e;
    padding-bottom:15px;
    position:absolute;
    top:0;
    opacity: 0;
    /*transition:all .5s linear;*/
  }

  /*列表*/
  .app-homeContainer .mui-card{
    margin:20px 15px 32px 15px;
    box-shadow: 0 0 10px 5px rgba(0,0,0,0.13);
  }
  .app-homeContainer .mui-card .mui-card-header{
    border:0;
    width:100%;
  }
  .app-homeContainer .mui-card-header>img:first-child{
    width:100%;
    height:240px;
  }
  .app-homeContainer .mui-card-content-inner{
    padding-bottom:0;
  }
  .mui-card-content-inner > p:first-child{
    height:21px;
    font-family: Microsoft YaHei;
    font-size: 16px;
    color: #272831;
    letter-spacing: 1px;
  }
  .mui-card-content-inner > p:nth-child(2){
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #7E808A;
    letter-spacing: 0.8px;
    line-height: 24px;
  }
  .app-homeContainer .mui-card-footer .mui-card-link, .mui-card-header .mui-card-link{
    height:13px;
    line-height: 12px;
    font-size:12px;
    font-weight:400;
    color: #272831de;
    padding-bottom:15px;
    /* box-sizing:border-box; */
    font-family: 'SourceHanS-S_Be206bf1321a330';
    letter-spacing: 0.8px;
    border-bottom: solid 2px #424347;
    margin:0;
  }
  .app-homeContainer .mui-card-footer{
    /* padding-bottom: 9px; */
    margin-bottom:5px;
    padding-top:0;
    padding-bottom:0;
  }
  .app-homeContainer .mui-card-footer:before, .mui-card-header:after{
    height:0;
  }
  /*九宫格*/
  .title{
    font-family: 'SourceHanS-S_Be206bf1321a330';
    font-size: 18px;
    color:#272831;
    font-weight:400;
    letter-spacing: 0.8px;
    text-align:center;
  }
  .app-homeContainer .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
    font-family: PingFangSC-Regular;
    font-size: 12px;
    letter-spacing: 0.8px;
    line-height: 16px;
    color: #3E3E3E;
    text-align:center;
    margin:0;
  }

  
</style>