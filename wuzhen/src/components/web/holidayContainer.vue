<template>
  <div class="app-holidayContainer">
    <div class="header">
      <h1>{{Ftitle}}</h1>
    </div>
    <div class="container">
      <div class="nav">
        <router-link to="/home" style="color:#7E808A">首页</router-link>
        <span style="color:#7E808A">&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span>
        <router-link :to="'/home/vacation?tid='+tid" style="color:#7E808A">{{Htitle}}</router-link>
        <span style="color:#7E808A">&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span>
        <span>{{Ftitle}}</span>
      </div>
      <!-- 卡片 -->
      <div class="my-box"  v-for="key in list">
        <h3 class="my-header">{{key.title}}</h3>
        <div class="mui-card" v-for="item in key.data">
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
            <a class="mui-card-link" >了解更多</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){ return {
      tid:0,
      Htitle:"",
      Ftitle:"",
      list:[]
    } },
    methods:{
      getHoliday(){
        var fid=this.$route.query.fid;
        var url="http://localhost:9000/holiday?fid="+fid;
        this.axios.get(url).then(result=>{
          //console.log(this.list);
          this.list=result.data;
          this.Htitle=this.list[0].data[0].t_title;
          this.Ftitle=this.list[0].data[0].f_title;
          this.tid=this.list[0].data[0].tid;
          //console.log(this.Ftitle);
        })
      }
    },
    created(){
      this.getHoliday();
      this.$emit('public_header', true);
      this.$emit('public_footer', true);
      this.$emit('public_tabbar', true);
      this.$emit('public_float', true);
    }
  }
</script>
<style scoped>
  .app-holidayContainer{
    background:#fff;
  }
  
  .header{
    background:url("../../assets/img/2018050411474867252.jpg") no-repeat;
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
  .container .mui-card{
    border:0;
    margin:0;
    margin-bottom:10px;
  }
  /* .container .mui-card .mui-card-header{
    border:0;
    width:100%;
  } */
  .container .mui-card-header>img:first-child{
    width:100%;
    height:240px;
  }
  .container .mui-card-content-inner{
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
    font-size: 14px;
    color: #7E808A;
    letter-spacing: 0.8px;
    line-height: 24px;
  }
  .container .mui-card-footer .mui-card-link, .mui-card-header .mui-card-link{
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
  .container .mui-card-footer{
    /* padding-bottom: 9px; */
    margin-bottom:5px;
    padding-top:0;
    padding-bottom:0;
  }
  .container .mui-card-footer:before, .mui-card-header:after{
    height:0;
  }
</style>