$(".case-list-wrap>.case-list>li").on( "mouseover",function(e){
    var $a=$(e.target);
    if($a.is("a")){
        var $as=$("ul.case-list>li>a");
        //$as [ a, a, a ].indexOf(a)
        var i=$as.index($a);
        var left=100*i;
        $(".case-list-wrap>div.box").css({left});
    }
})
$(".case-list-wrap>.case-list>li").mouseover(function(e){
    var $d1=$(e.target);
    if($d1.is("d1")){
        var $d1s=$("ul.case-list>li>d1");
        //$as [ a, a, a ].indexOf(a)
        var i=$d1s.index($d1);
        var left=100*i;
        $(".case-list-wrap>div.box").css({left});
    }
})