$(function(){
    $("#submit").click(function(){
        var uname=$("#uname").val();
        var upwd=$("#upwd").val();
        var phone=$("#phone").val();
        if($.trim(uname==""||uname==null)&&$.trim(upwd==""||upwd==null)&&$.trim(phone==""||phone==null)){
            $("#sub").html("<span id='sub' style='color:red'>用户名或密码或手机号不能为空</span>");
        }else{
            $.ajax({
                url:"http://localhost:3000/user/reg",
                type:"post",
                data:{uname,upwd,phone},
                dataType:"json",
                success:function(res){
                    console.log(uname);
                     //验证用户名是否正确
                    //验证密码是否正确
                    //验证手机号是否正确
                    //判断是否注册成功
                    if(res.msg=="success"){
                        alert("注册成功");
                        window.location.href="/register.html";
                    }else{
                        alert("注册失败");
                        $("#sub").html("<span id='sub' style='color:red'>用户名密码手机号格式错误</span>");
                    }
                }
            })
        }
    })
})