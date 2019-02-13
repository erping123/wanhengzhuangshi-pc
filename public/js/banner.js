//淡入淡出效果
// var oUl=document.getElementById('ul');
// var aLi_u=oUl.getElementsByTagName('li');
// var oOl=document.getElementById('ol');
// var aLi_o=oOl.getElementsByTagName('li');
// for(var i=0;i<aLi_o.length;i++){
// 	aLi_o[i].index=i;
// 	aLi_o[i].onmouseover=function(){
// 		for(var i=0;i<aLi_o.length;i++){
// 			aLi_o[i].className="";
// 			aLi_u[i].style.display="none";
// 			// aLi_u[i].style.filter="alpha(opacity=0)";
// 			// aLi_u[i].style.opacity=0;
// 		}
// 		this.className="active";
// 		aLi_u[this.index].style.display="block";
// 		startMove(aLi_u[this.index],{opacity:100});
// 	};
// }

var index=0;
var imglen=$('.banner a').length;
function autoplay(){
	setInterval(function(){
		index++;
		if(index>=imglen){
			index=0;
		}
		selecting(index);
	},3000);
}
function selecting(index){
	$('.banner a').eq(index).fadeIn(500)
	.siblings().fadeOut(500);
}
autoplay();