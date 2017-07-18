// Empty JS for your own code to be here
$(".lanren ul li").hover(function () {
	$(this).find(".txt").stop().animate({
		height: "198px"
	}, 400);
	$(this).find(".txt h3").stop().animate({
		paddingTop: "60px"
	}, 400);
}, function () {
	$(this).find(".txt").stop().animate({
		height: "45px"
	}, 400);
	$(this).find(".txt h3").stop().animate({
		paddingTop: "0px"
	}, 400);
})
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	var s = "<a class=\"btn btn-default\" href=\"http://www.bilibili.com/video/av5855156/\" role=\"button\">av5855156</a>";
	document.getElementById("p1").innerHTML = s;
} else {
	var s = "<embed height=\"415\" width=\"544\" quality=\"high\" allowfullscreen=\"true\" type=\"application/x-shockwave-flash\" src=\"https://static.hdslb.com/miniloader.swf\" flashvars=\"aid=5855156&page=1\" pluginspage=\"https://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash\"></embed>";
	document.getElementById("p1").innerHTML = s;
}
document.getElementById("lastUpdate").innerHTML = "本页面最后修改于" + document.lastModified;

function time() {
	var theTime = "2017/11/11";
	var endTime = new Date(theTime);
	var totalSecs = (endTime - new Date()) / 1000;
	var days = Math.floor(totalSecs / 3600 / 24);
	document.getElementById("time1").innerHTML = "距离NOIp2017 还有<strong>" + days + "天</strong>";
	var theTime = "2017/7/19";
	var endTime = new Date(theTime);
	var totalSecs = (endTime - new Date()) / 1000;
	var days = Math.floor(totalSecs / 3600 / 24);
	document.getElementById("time2").innerHTML = "距离 NOI2017 还有<strong>" + days + "天</strong>";
}
window.onload = function () {
	time();
}
