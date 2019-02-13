$(function(){
    $("#submit").click(function(){
        var uname=$("#uname").val();
        var upwd=$("#upwd").val();
        var phone=$("#phone").val();
        // if($.trim(uname==""||uname==null)&&$.trim(upwd==""||upwd==null)&&$.trim(phone==""||phone==null)){
        //     $("#sub").html("<span id='sub' style='color:red'>用户名或密码或手机号不能为空</span>");
        // }else{
            $.ajax({
                url:"http://localhost:3000/user/reg",
                type:"post",
                data:{uname,upwd,phone},
                dataType:"json",
                success:function(res){
                    console.log(uname);
                    //验证用户名是否正确
                    $("#uname").blur(function(){
                        $("#names").empty();
                        var name=$(this).val();
                        if(name==""||name==null){
                          $("#uname").parent().after("<p id='names' style='color:red;font-size:3px;text-align:center'>用户名不能为空</p>");
                        }
                        // else{
                        //   $("#uname").parent().after("<p id='names' style='color:red;font-size:3px;text-align:center'>6-12位字符</p>"); 
                        // }
                    });
                    $("#uname").focus(function(){
                        $("#names").empty();
                        var name=$(this).val();
                        if(name==""||name==null){
                          $("#uname").parent().after("<p id='names' style='color:red;font-size:3px;text-align:center'>6-12位字符</p>");
                        }
                    });
                    //验证密码是否正确
                    $("#upwd").blur(function(){
                        $("#pwds").empty();
                        var pwd=$(this).val();
                        if(pwd==""||pwd==null){
                          $("#upwd").parent().after("<p id='pwds' style='color:red;font-size:3px;text-align:center'>密码不能为空</p>");
                        }
                        // else{
                        //     $("#upwd").parent().after("<p id='pwds' style='color:red;font-size:3px;text-align:center'>6位数字</p>");  
                        // }
                    });
                    $("#upwd").focus(function(){
                        $("#pwds").empty();
                        var pwd=$(this).val();
                        if(pwd==""||pwd==null){
                          $("#upwd").parent().after("<p id='pwds' style='color:red;font-size:3px;text-align:center'>6位数字</p>");
                        }
                    });
                    //两次输入密码是否一致
                    $("#upwd1").blur(function(){
                        $("#pwds1").empty();
                        var pwd1=$(this).val();
                        if(pwd1==""||pwd1==null){
                            $("#upwd1").parent().after("<p id='pwds1' style='color:red;font-size:3px;text-align:center'>密码不能为空</p>");
                        }
                        // else if(pwd!=pwd1||pwd1!=""){
                        //     $("#upwd1").parent().after("<p id='pwds1' style='color:red;font-size:3px;text-align:center'>两次密码输入不一致</p>");
                        // }
                    });
                    $("#upwd1").blur(function(){
                        $("#pwds1").empty();
                        var pwd1=$(this).val();
                        if(pwd1==""||pwd1==null){
                            $("#upwd1").parent().after("<p id='pwds1' style='color:red;font-size:3px;text-align:center'>两次密码输入一致</p>");
                        }
                    });
                    //验证手机号是否正确
                    $("#phone").blur(function(){
                        $("#phones").empty();
                        var phone=$(this).val();
                        if(phone==""||phone==null){
                          $("#phone").parent().after("<p id='phones' style='color:red;font-size:3px;text-align:center'>手机号不能为空</p>");
                        }
                        // else{
                        //     $("#phone").parent().after("<p id='phones' style='color:red;font-size:3px;text-align:center'>6位数字</p>");  
                        // }
                    });
                    $("#phone").focus(function(){
                        $("#phones").empty();
                        var phone=$(this).val();
                        if(phone==""||phone==null){
                          $("#phone").parent().after("<p id='phones' style='color:red;font-size:3px;text-align:center'>11位数字</p>");
                        }
                    });
                    //提交按钮
                    // $("#submi").blur(function(){
                    //     $("#sub").empty();
                    //     var sub=$(this).val();
                    //     if(sub==""||sub==null){
                    //       $("#submi.parentNode").after("<p id='sub' style='color:red;font-size:3px;text-align:center'>用户名或密码或手机号不能为空</p>");
                    //     }
                    // });
                    //判断是否注册成功
                    if(res.msg=="success"&&uname!==""&&upwd!==""&&phone!==""){
                        alert("注册成功");
                        window.location.href="/index.html";
                    }else{
                        // alert("注册失败");
                        $("#submit").after("<p id='sub' style='color:red;font-size:3px;text-align:center'>用户名密码手机号不能为空</p>");
                    }
        
                }
            })
        //}
    })
})


// //if(res.msg=="success"){
//     alert("注册成功");
//     window.location.href="/register.html";
// }else{
//     alert("注册失败");
//     $("#sub").html("<span id='sub' style='color:red'>用户名密码手机号格式错误</span>");
// }