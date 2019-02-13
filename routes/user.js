const express=require("express");
const router=express.Router();
const pool=require("../pool");

//登录功能
router.post("/login",(req,res)=>{
  var uname=req.body.uname;
  var upwd=req.body.upwd;
  console.log(uname);
  var sql="select * from zs_user where uname=? and upwd=?";
  pool.query(sql,[uname,upwd],(err,result)=>{
    if(err) console.log(err);
    if(result.length==1){
      req.session.uid=result[0]["uid"]
      console.log(req.session.uid);
      res.send({ok:1});
    }else{
      res.send({ok:0,msg:"用户名或密码错误！"})
    }
  })
})

//注册功能
router.post("/reg",(req,res)=>{
  var uname=req.body.uname;
  var upwd=req.body.upwd;
  var phone=req.body.phone;
  console.log(uname);
  console.log(upwd);
  console.log(phone);
  var sql='INSERT INTO zs_user VALUES(NULL,?,?,NULL,?,NULL,NULL,NULL)';
  pool.query(sql,[uname,upwd,phone],(err,result)=>{
    console.log(result);
    if(err) console.log(err);
    if(result.affectedRows>0){
      res.send({code:200,msg:'success'}); 
    }else{
      res.send({msg:'fail'});
    }
  })
})


module.exports=router;