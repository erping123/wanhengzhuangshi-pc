$(function(){
  $("#logins").click(function(){
    var uname=$("#uname").val();
    var upwd=$("#upwd").val();
    console.log(uname);
    $.ajax({
      url:"http://localhost:3000/user/login",
      type:"post",
      data:{uname,upwd},
      dataType:"json",
      success:function(res){
        console.log(res);
        console.log(uname);
        console.log(upwd);
            $("#uname").blur(function(){
            $("#names").empty();
            var name=$(this).val();
            if(name==""||name==null){
              $("#uname").after("<span id='names' style='color:red'>用户名不能为空</span>");
            }else{
              $("#uname").after("<span id='names' style='color:red'>6-12位字符</span>"); 
            }
          });
          $("#upwd").blur(function(){
            $("#pwds").empty();
            var pwd=$(this).val();
            if(pwd==""||pwd==null){
              $("#upwd").after("<span id='pwds' style='color:red'>密码不能为空</span>");
            }else{
                $("#upwd").after("<span id='pwds' style='color:red'>6位数字</span>");  
            }
          });
        
          if(res.ok=="1"){
            alert("登陆成功");
            window.location.href="/index.html";
          }else{
            alert("登录失败");
            $("#logins").after("<span id='log' style='color:red'>用户名密码错误</span>");
          }
        }
    })
  });
})