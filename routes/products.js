const express=require("express");
const router=express.Router();
const pool=require("../pool");
router.get("/product_list",(req,res)=>{
    var did=req.query.did;
    var output={
        pno:0,
        pageSize:20,
        count:0,
        pageCount:0,
        products:[]
    }
    if(req.query.pno!==undefined)
    output.pno=parseInt(req.query.pno)
    var sql="select * from zs_product where did=?";
    pool.query(sql,did,(err,result)=>{
        if(err) console.log(err);
        // var count=result.length;
        console.log(result.data);
        var pageCount=
          Math.ceil(count/output.pageSize);
        output.count=count;
        output.pageCount=pageCount;
        var starti=output.pno*output.pageSize;
        console.log(result)
        output.products=result.slice(
          starti,starti+output.pageSize
        );
        res.send(output)
      })
})







module.exports=router;