$(".wrap").bind("mouseenter mouseleave",function(e){
    var mask=$(this).find(".mask");
    var w=$(this).width();
    var h=$(this).height();
    var x=(e.pageX-this.offsetLeft-(w/2))*(w>h?(h/w):1);
    var y=(e.pageY-this.offsetLeft-(h/2))*(h>w?(w/h):1);
    var direction=Math.round((((Math.atan2(y,x)*(180/Math.PI))+180)/90)+3)%4;
    var eventType=e.type;
    var dirName=new Array("上方","右侧","下方","左侧");
    if(e.type=="mouseenter"){
        mouseIN(direction,mask);
    }else{
        mouseOut(direction,mask);
    }
}); 
function mouseIN(direction,ele){
    switch(direction){
        //上方
        case 0:
            ele.css({
                top:"-100%",
                left:0
            }).animate({
                top:0
            },500);
            break;
        //右方
        case 1:
            ele.css({
                top:0,
                left:"100%"
            }).animate({
                left:0
            },500);
            break;
        //下方
        case 2:
            ele.css({
                top:"100%",
                left:0
            }).animate({
                top:0
            },500);
            break;
            //下方
        case 3:
            ele.css({
                top:0,
                left:"-100%"
            }).animate({
                left:0
            },500);
            break;
    }
};
function mouseOut(direction,ele){
    switch(direction){
        //上方
        case 0:
            ele.animate({
                top:"-100%"
            });
            break;
        //右方
        case 1:
            ele.animate({
                left:"100%"
            });
            break;
        //下方
        case 2:
            ele.animate({
                top:"100%"
            });
            break;
            //下方
        case 3:
            ele.animate({
                left:"-100%"
            });
            break;
    }
}
$(".wrap-list").bind("mouseenter mouseleave",function(e){
    var mask=$(this).find(".mask");
    var w=$(this).width();
    var h=$(this).height();
    var x=(e.pageX-this.offsetLeft-(w/2))*(w>h?(h/w):1);
    var y=(e.pageY-this.offsetLeft-(h/2))*(h>w?(w/h):1);
    var direction=Math.round((((Math.atan2(y,x)*(180/Math.PI))+180)/90)+3)%4;
    var eventType=e.type;
    var dirName=new Array("上方","右侧","下方","左侧");
    if(e.type=="mouseenter"){
        mouseIN(direction,mask);
    }else{
        mouseOut(direction,mask);
    }
}); 
function mouseIN(direction,ele){
    switch(direction){
        //上方
        case 0:
            ele.css({
                top:"-100%",
                left:0
            }).animate({
                top:0
            },500);
            break;
        //右方
        case 1:
            ele.css({
                top:0,
                left:"100%"
            }).animate({
                left:0
            },500);
            break;
        //下方
        case 2:
            ele.css({
                top:"100%",
                left:0
            }).animate({
                top:0
            },500);
            break;
            //下方
        case 3:
            ele.css({
                top:0,
                left:"-100%"
            }).animate({
                left:0
            },500);
            break;
    }
};
function mouseOut(direction,ele){
    switch(direction){
        //上方
        case 0:
            ele.animate({
                top:"-100%"
            });
            break;
        //右方
        case 1:
            ele.animate({
                left:"100%"
            });
            break;
        //下方
        case 2:
            ele.animate({
                top:"100%"
            });
            break;
            //下方
        case 3:
            ele.animate({
                left:"-100%"
            });
            break;
    }
}