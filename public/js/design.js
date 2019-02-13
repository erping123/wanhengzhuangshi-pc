


// $(".shejishi .design-list-wrap .design-list").mouseenter(function(){
//     $(".shejishi .design-list-wrap .design-list .design-li .design-details").css("display","none");
//     $(".shejishi .design-list-wrap .design-list .design-li .design-control li").css.hidden("display","block");
// })

// $(".shejishi .design-list-wrap .design-list .design-li").mouseleave(function(){
//     $(".shejishi .design-list-wrap .design-list .design-li .design-control li").css("display","block");
// })


$(function(){
    //装修计算效果
    var $controlBar = $('#control-bar');
    var $fixedBarWrap = $('#fixed-bar-wrap');
    $controlBar.click(function() {
        var bottomVal = $fixedBarWrap.css('bottom');
        if (bottomVal === '-372px') {
            $fixedBarWrap.stop(true, true).animate({'bottom': 0}).addClass('open');
        } else {
            $fixedBarWrap.stop(true, true).animate({'bottom': '-372px'}).removeClass('open');
        }
    })
})
