<template>
    <div class="app-tourContainer">
      <div class="header">
        <h1>游记攻略</h1>
      </div>
      <div class="container">
        <div class="nav">
          <router-link to="/home" style="color:#7E808A">首页</router-link>
          <span style="color:#7E808A">&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span>
          <span style="color:#7E808A">出行锦囊</span>
          <span style="color:#7E808A">&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span>
          <span>游记攻略</span>
        </div>
        <!-- 轮播 -->
        <mt-swipe :auto="4000" style="height:120px;">
          <mt-swipe-item class="mui-table-view-cell mui-media" >
            <a class="mui-navigate-right">
              <img class="mui-media-object mui-pull-left my-left" src="../../assets/img/tour/2018052410393845384.jpg" >
            </a>
          </mt-swipe-item>
          <mt-swipe-item class="mui-table-view-cell mui-media" >
            <a class="mui-navigate-right">
              <img class="mui-media-object mui-pull-left my-left" src="../../assets/img/tour/2018052410422581808.jpg" >
            </a>
          </mt-swipe-item>
          <mt-swipe-item class="mui-table-view-cell mui-media" >
            <a class="mui-navigate-right">
              <img class="mui-media-object mui-pull-left my-left" src="../../assets/img/tour/2018052509192888108.jpg" >
            </a>
          </mt-swipe-item>
          <mt-swipe-item class="mui-table-view-cell mui-media" >
            <a class="mui-navigate-right">
              <img class="mui-media-object mui-pull-left my-left" src="../../assets/img/tour/2018052509195481132.jpg" >
            </a>
          </mt-swipe-item>
        </mt-swipe>
        <h3 style="text-align: center; margin-top:20px;color:#272831">推荐攻略</h3>
        <ul class="select-type">
          <li>
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                日程
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>一日游</el-dropdown-item>
                <el-dropdown-item>二日游 </el-dropdown-item>
                <el-dropdown-item>三日游</el-dropdown-item>
                <el-dropdown-item>深度游 </el-dropdown-item>
                <el-dropdown-item>主体 </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <li>
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                全体
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>家庭游</el-dropdown-item>
                <el-dropdown-item>情侣游 </el-dropdown-item>
                <el-dropdown-item>团体游</el-dropdown-item>
                <el-dropdown-item>朋友出行 </el-dropdown-item>
                <el-dropdown-item>个人出行</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
        </ul>
        <div class="sousuo">
          <input type="text" placeholder="搜索你感兴趣的攻略">
          <img src="../../assets/img/doduo.png" alt="">
        </div>
        <!-- 分页 -->
        <div class="cantainer">
          <!-- 卡片 -->
          <div class="mui-card" v-for="item in list.slice((currentPage-1)*pageSize,currentPage*pageSize)">
            <div class="mui-card-header mui-card-media" style="padding:0;height:240px">
              <img :src="item.img_url">
            </div>
            <div class="mui-card-content">
              <div class="mui-card-content-inner">
                <p>{{item.title}}</p>
                <p>{{item.subtitle}}</p>
                <p>{{item.content}}</p>
              </div>
            </div>
            <div class="mui-card-footer">
              <a class="mui-card-link" >了解更多</a>
            </div>
          </div>
          <div class="block" style="text-align: center">
            <el-pagination
              small
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              layout="prev,pager,next"
              :page-size="pageSize"
              :total="list.length">
            </el-pagination>
          </div>
        </div>
        
      </div>
    </div>
  </template>
  <script>
    export default{
      data(){ return {
        list:[],
        currentPage:1,
        pageSize:5
      } },
      methods:{
        handleList(){
          var url="http://localhost:9000/tour";
          this.axios.get(url).then(result=>{
            this.list=result.data;
            //console.log(this.list);
          })
        },
        handleCurrentChange:function(currentPage){
          this.currentPage=currentPage;
        }
      },
      created(){
        this.handleList();
        this.$emit('public_header', true);
        this.$emit('public_footer', true);
        this.$emit('public_tabbar', true);
        this.$emit('public_float', true);
      }
    }
  </script>
  <style scoped>
    .app-tourContainer{
      background:#fff;
    }
    
    .header{
      background:url("../../assets/img/2018012410401251140.jpg") no-repeat;
      background-size:cover;
      height:71px;
      position: relative;
      margin-top:-5px;
    }
    .header h1{
      z-index: 100;
      position: absolute;
      font-family: 'SourceHanS-S_Be206bf1321a330';
      font-size: 24px;
      color: #FFFFFF;
      letter-spacing: 0.34px;
      line-height: 35px;
      top: 50%;
      margin-top: -17.5px;
      left: 16px;
      font-weight:400;
    }
    .container{
      padding:0 15px;
    }
    .nav{
      font-size:14px;
      font-family: Arial,'微软雅黑','Microsoft YaHei',PingFangSC-Regular;
      color: #7E808A;
      margin-top:20px;
      padding-bottom:20px;
      border-bottom:1px solid #ccc;
    }
    .nav span{
      font-size:14px;
      color:#000;
      letter-spacing: 0;
    }
    
    /* 轮播 */
    .mui-navigate-right img{
      width:100%;
      height:100%;
    }
    .mui-table-view-cell{
      padding:0;
    }

    .select-type{
      display: flex;
      justify-content: space-around;
    }
    .select-type li a{
      font-size:14px;
      color:#272831
    }
    .select-type li img{
      vertical-align: middle;
    }
    .sousuo{
      margin-top:10px;
    }
    .sousuo input{
      border:0;
      border-bottom:1px solid #272831;
      width:90%;
      height:24px;
      font-size:14px;
      letter-spacing: 0.8px;
      padding-bottom:15px;
    }
    .sousuo img{
      vertical-align: middle;
      width:20px;
      height:20px;
    }
    /*列表*/
    .my-header{
      font-family: 'SourceHanS-S_Be206bf1321a330';
      font-size: 24px;
      letter-spacing: 0.86px;
      line-height: 71px;
      color:#272831;
      font-weight: 400;
      margin:0;
    }
    .cantainer .mui-card{
      border:0;
      margin:0;
      margin-bottom:10px;
    }
    /* .container .mui-card .mui-card-header{
      border:0;
      width:100%;
    } */
    .cantainer .mui-card-header>img:first-child{
      width:100%;
      height:240px;
    }
    .cantainer .mui-card-content-inner{
      padding-bottom:0;
    }
    .mui-card-content-inner > p:first-child{
      margin-bottom:10px;
      font-family: Microsoft YaHei;
      font-size: 18px;
      color: #272831;
      letter-spacing: 1px;
    }
    .mui-card-content-inner > p:nth-child(2){
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #000;
      letter-spacing: 0.8px;
      line-height: 24px;
      margin-bottom:10px;
    }
    .cantainer .mui-card-footer .mui-card-link, .mui-card-header .mui-card-link{
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
    .cantainer .mui-card-footer{
      /* padding-bottom: 9px; */
      margin-bottom:5px;
      padding-top:0;
      padding-bottom:0;
    }
    .cantainer .mui-card-footer:before, .mui-card-header:after{
      height:0;
    }
  </style>