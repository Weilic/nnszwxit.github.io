// Empty JS for your own code to be here
$(".lanren ul li").hover(function(){
	$(this).find(".txt").stop().animate({height:"198px"},400);
	$(this).find(".txt h3").stop().animate({paddingTop:"60px"},400);
},function(){
	$(this).find(".txt").stop().animate({height:"45px"},400);
	$(this).find(".txt h3").stop().animate({paddingTop:"0px"},400);
})
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
{
	var s = "<a class=\"btn btn-default\" href=\"https://www.bilibili.com/video/av5855156/\" role=\"button\">av5855156</a>";
	document.getElementById("p1").innerHTML += s
}
else{
	var s = "<embed height=\"415\" width=\"544\" quality=\"high\" allowfullscreen=\"true\" type=\"application/x-shockwave-flash\" src=\"http://static.hdslb.com/miniloader.swf\" flashvars=\"aid=5855156&page=1\" pluginspage=\"http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash\"></embed>";
	document.getElementById("p1").innerHTML += s
}