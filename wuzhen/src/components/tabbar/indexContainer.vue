<template>
    <div class="app-indexContainer">
      <header class="mui-bar mui-bar-nav">
        <a id="offCanvasBtn" href="#offCanvasSide" class="mui-icon mui-action-menu mui-icon-bars mui-pull-left"></a>
        <router-link to="/home/index" class="mui-action-back  mui-pull-left logo-img"><img src="../../assets/img/logo.png"></router-link>
        <ul class="mui-pull-right ">
          <li class="mui-pull-left myitem"><a><img src="../../assets/img/tel.png"></a></li>
          <li class="mui-pull-left myitem"><router-link to="/index/login"><img src="../../assets/img/geren.png"></router-link></li>
          <li class="mui-pull-left myitem">
            <a class="myCart">
              <img src="../../assets/img/shopping-cart.png">
              <span class="count">0</span>
            </a>
          </li>
        </ul>
      </header>
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <a><img src="../../assets/img/edfaa242-e3cd-4f72-9ae4-281679342db3.jpg" class="lunbo"></a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a><img src="../../assets/img/55965cbf-8624-433f-be86-0f585bb0d202.jpg" class="lunbo"></a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a><img src="../../assets/img/bee21371-e44c-477d-aaf0-c93372ab8f5e.jpg" class="lunbo"></a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a><img src="../../assets/img/b5aaa296-c6a1-4f7a-9c6a-d7386f9cbe2f.jpg" class="lunbo"></a>
        </mt-swipe-item>
      </mt-swipe>
      <div class="option">
        <ul>
          <li><a href="#">套餐</a></li>
          <li><a href="#">酒店</a></li>
          <li><a href="#">票务</a></li>
          <li><a href="#">美食</a></li>
        </ul>
      </div>
      <div class="product">
        <div class="product-title">
          <h4 class="f1">套餐</h4>
          <p>每一款套餐，都是不一样的玩法</p>
        </div>
        <div class="info">
          <ul>
            <li>
              <a><img src="../../assets/img/61264592-4db3-4934-ab27-ab32e417272a.jpg"></a>
              <div class="product-info">
                <h3>￥<span>1560</span>起</h3>
                <em>原价:￥1960</em>
                <p>乌村一价全包</p>
              </div>
            </li>
            <li>
              <a><img src="../../assets/img/4b3118c7-2644-4aec-873d-683a165cee9a.jpg"></a>
              <div class="product-info">
                <h3>￥<span>1060</span>起</h3>
                <em>原价:￥1560</em>
                <p>西栅晨幕(临水民宿)</p>
              </div>
            </li>
            <li>
              <a><img src="../../assets/img/34d80983-c4df-4ff5-b9d0-cb64ff8ecd77.jpg"></a>
              <div class="product-info">
                <h3>￥<span>1070</span>起</h3>
                <em>原价:￥1836</em>
                <p>乐享美食</p>
              </div>
            </li>
            <li>
              <a><img src="../../assets/img/2248e602-a9e5-49ca-81da-7114f8034b75.jpg"></a>
              <div class="product-info">
                <h3>￥<span>380</span>起</h3>
                <em>原价:￥380</em>
                <p>乌村休闲游</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="more"><span @click="hasMore">更多</span></div>
      </div>
      <div class="product">
        <div class="product-title">
          <h4 class="f2">酒店</h4>
          <p>每一个酒店，都是一次心灵的依靠</p>
        </div>
        <div class="info">
          <ul>
            <li>
              <a><img src="../../assets/img/605f72bd-f59c-4dce-93be-7fca220b9bfc.jpg"></a>
              <div class="product-info">
                <h3>￥<span>1310</span>起</h3>
                <p>锦堂行馆</p>
              </div>
            </li>
            <li>
              <a><img src="../../assets/img/6d60d729-5929-4948-9742-6538ce036474.jpg"></a>
              <div class="product-info">
                <h3>￥<span>650</span>起</h3>
                <p>望津里精品酒店</p>
              </div>
            </li>
            <li>
              <a><img src="../../assets/img/5df9c683-f761-4ef6-8e91-8c83b31c8cf8.jpg"></a>
              <div class="product-info">
                <h3>￥<span>650</span>起</h3>
                <p>通安客栈</p>
              </div>
            </li>
            <li>
              <a><img src="../../assets/img/475c2e95-3dc4-4c03-84cc-a84a30655123.jpg"></a>
              <div class="product-info">
                <h3>￥<span>210</span>起</h3>
                <p>乌镇民宿</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="more"><span @click="hasMore">更多</span></div>
      </div>
      <div class="product">
        <div class="product-title">
          <h4 class="f3">游记</h4>
          <p>来过，便不曾离开</p>
        </div>
        <mt-swipe :auto="0" style="height:120px;">
          <mt-swipe-item class="mui-table-view-cell mui-media" >
            <a class="mui-navigate-right">
              <img class="mui-media-object mui-pull-left my-left" src="../../assets/img/71bd3ec3-fdc4-4c2c-92c3-a5fbd5e493c4.png" >
              <div class="mui-media-body">乌村，此心安处是吾乡
                <p class="mui-ellipsis">导读 :苏东坡在定风波里问，试问岭南应不好？ 却道：此心安处是吾乡。</p>
              </div>
            </a>
          </mt-swipe-item>
          <mt-swipe-item class="mui-table-view-cell mui-media" >
            <a class="mui-navigate-right">
              <img class="mui-media-object mui-pull-left my-left" src="../../assets/img/2de11bb6-220d-413b-994b-68a1e3c9f00b.png" >
              <div class="mui-media-body">乌村有多好玩？一般人我不...
                <p class="mui-ellipsis">导读 :乌镇里面有个乌托邦，她的名字叫乌村。</p>
              </div>
            </a>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <footer>
        <div class="footer-content">
          <div class="footer-contact">
              <h5>联系我们</h5>
              <a href="tel:0573-88731088">0573-88731088</a>
          </div>
        
          <div class="footer-introduce">
              <h5>公司简介</h5>
              <ul>
                  <li>· 世界互联网大会永久地址</li>
                  <li>· 领先的数字化服务</li>
                  <li>· 7*24小时服务</li>
                  <li>· 无任何隐形消费</li>
              </ul>
          </div>
          <div class="footer-copyright">
              <p>版权申明 | 乌镇旅游股份有限公司©版本所有©浙ICP备09047744号</p>
          </div>
        </div>
     </footer>
    </div>
  </template>
  <script>
    export default{
      data(){ return {}},
      methods:{
        hasMore(){}
      },
      created(){
        this.$emit('public_header', false);
        this.$emit('public_footer', false);
        this.$emit('public_tabbar', false);
        this.$emit('public_float', true);
      }
    }
  </script>
  <style scoped>
    .app-indexContainer{
      background:#fff;
      margin-bottom:-58px;
    }
    .app-indexContainer .mui-bar{
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
    .app-indexContainer .mui-pull-right .myitem img{
      width:24px;
      height:24px;
      margin-top:12px;
      margin-left:22px;
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

  /*轮播*/
  .app-indexContainer .mint-swipe{
    height:260px;
  } 
  .app-indexContainer .lunbo{
    width:100%;
    height:260px;
  } 
  .option ul{
    display: flex;
    justify-content: space-around;
    padding-top:20px;
  }
  .option ul li{
    width:50px;
    height:30px;
    line-height: 30px;
    background:#F3F4F8;
    border-radius:40%;
    text-align: center;
    vertical-align: middle;
  }
  .option ul li a{
    color:#2A2A2F;
    font-size:14px;
    
  }

  .product-title{
    text-align: center;
    margin-top:20px;
  }
  .product .product-title h4{
    background-size:1.2rem 1.2rem;
    font-weight: 400;
    letter-spacing: 0.9px;
  }
  h4.f1{
    background:url("../../assets/img/product1.png") no-repeat 42% center;
  }
  h4.f2{
    background:url("../../assets/img/product2.png") no-repeat 42% center;
  }
  h4.f3{
    background:url("../../assets/img/product3.png") no-repeat 42% center;
  }
  .info ul li{
    height:200px;
    position: relative;
  }
  .info ul li img{
    height:200px;
    width:100%;
  }
  .product-info{
    color:#fff;
    position:absolute;
    top:50%;
    left:10px;
  }
  .product-info em{
    text-decoration: line-through;
    font-size:8px;
    font-weight: 500;
  }
  .product-info h3{
    font-size: 18px;
    font-weight: 500;
  }
  .product-info h3 span{
    font-size:38px;
    font-weight:600;
  } 
  .product-info p{
    color:#fff;
    font-weight: 600;
  }
  div.more{
    width:100%;
    height:20px;
    text-align:center;
    margin-top:20px;
  }
  .more span{
    border:1px solid #ccc;
    font-size:8px;
    color:#7E808A;
    padding:6px 22px;
  }
  .my-left{
    width:80px;height:80px;margin-right:20px
  }
  footer{
    background:#2A2A2F;
    padding:15px 15px 5px 15px;
  }

  </style>