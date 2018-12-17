const express=require("express");
const cors=require("cors");
const pool=require("./pool");
const bodyParser=require('body-parser');

var app=express();
app.listen(9000);

app.use(express.static(__dirname+"/public"))

app.use(cors({
  origin:['http://localhost:9001','http://127.0.0.1:9001'],
  credentials:true
}))

//使用中间件
app.use(bodyParser.urlencoded({
	extended:false
}));

//首页图片轮播
app.get("/imagelist",(req,res)=>{
  var sql="SELECT * FROM `wz_carousel` WHERE position='home'";
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    //console.log(1111);
    res.writeHead(200,{
      "Content-Type":"application/json;charset=utf-8",
      "Access-Allow-Origin":"*"
    })
    res.write(JSON.stringify(result));
    res.end();
    //console.log(result);
  })
})

//首页主题
app.get("/themelist",(req,res)=>{
  var sql="SELECT * FROM wz_home_theme";
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.writeHead(200,{
      "Content-Type":"application/json;charset=utf-8",
      "Access-Allow-Origin":"*"
    })
    res.write(JSON.stringify(result));
    res.end();
  })
})

//主题分类页面
app.get("/content",(req,res)=>{
  var tid=req.query.tid;
  var sql="SELECT * FROM wz_theme_family WHERE tid=?";
  pool.query(sql,[tid],(err,result)=>{
    if(err) throw err;
    res.writeHead(200,{
      "Content-Type":"application/json;charset=utf-8",
      "Access-Allow-Origin":"*"
    })
    res.write(JSON.stringify(result));
    res.end();
  })
})


app.get("/holiday",(req,res)=>{
  var output=[];
  var res1=[];
  var res2=[];
  var fid=req.query.fid;
  var sql1="SELECT *,(SELECT t_title FROM wz_theme_family WHERE wz_theme_family.fid=wz_theme_holiday.fid) AS t_title,(SELECT title FROM wz_theme_family WHERE wz_theme_family.fid=wz_theme_holiday.fid) AS f_title FROM `wz_theme_holiday` WHERE fid=?";
  var sql2="SELECT * FROM wz_family_class WHERE fid=?";
  Promise.all([
    new Promise(function(open){
      pool.query(sql1,[fid],(err,result)=>{
        if(err) throw err;
        //console.log(result);
        res1=result;
        //console.log(res1)
        open();
      });
    }),
    new Promise(function(open){
      pool.query(sql2,[fid],(err,result)=>{
        if(err) throw err;
        res2=result;
        //console.log(res2);
        open();
      });
    })
  ]).then(function(){
    for(var i=0;i<res2.length;i++){
      //console.log(res2[i].title);
      output[i]={};
      output[i].title=res2[i].title;
      var content=[];
      for(var j=0;j<res1.length;j++){
        //console.log(res1[j].cid==res2[i].cid);
        if(res1[j].cid==res2[i].cid){
          content.push(res1[j]);
        }
        //console.log(content);
      }
      output[i].data=content;
    }
    //console.log(output);
    res.writeHead(200,{
      "Content-Type":"application/json;charset=utf-8",
      "Access-Allow-Origin":"*"
    })
    res.write(JSON.stringify(output));
    res.end();
  })
})

app.get("/tour",(req,res)=>{
  // var output={pageSize:5};
  // output.pno=req.query.pno;
  var sql="SELECT * FROM wz_traver_tour";
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    // output.count=result.length;
    // output.pageCount=Math.ceil(output.count/output.pageSize);
    // output.products=result.splice(output.pno*5,output.pno*5+5);
    res.writeHead(200,{
      "Content-Type":"application/json;charset=utf-8",
      "Access-Allow-Origin":"*"
    })
    res.write(JSON.stringify(result));
    res.end();
  })
})

app.post("/sigin",(req,res)=>{
  var uname=req.body.uname;
  var upwd=req.body.upwd;
  var phone=req.body.phone;
  var sql="SELECT * FROM wz_user WHERE uname=? AND upwd=? OR phone=?";
  console.log(uname,upwd,phone)
  if(uname==''){
    res.write(JSON.stringify({code:303,msg:"用户名或手机号不能为空！"}))
    res.end()
  }else if(upwd==''){
    res.write(JSON.stringify({code:303,msg:"密码不能为空！"}))
    res.end()
  }else{
    pool.query(sql,[uname,upwd,phone],(err,result)=>{
      if(err) throw err;
      res.writeHead(200,{
        "Content-Type":"application/json;charset=utf-8",
        "Access-Allow-Origin":"*"
      })
      if(result.length>0){
        res.write(JSON.stringify({code:1,msg:"登录成功！"}))
      }else{
        res.write(JSON.stringify({code:0,msg:"账户或密码错误！"}))
      }
      res.end();
    })
  }
  
})
