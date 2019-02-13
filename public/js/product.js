$(function(){
    $.ajax({
       url:"http://localhost:3000/products/product_list?did=50", 
       type:"get",
       data:{},
       dataType:"json",
       success: function(output) {
           console.log(output.did);
       }
    })
})