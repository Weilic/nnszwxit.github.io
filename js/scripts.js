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
function verticalAlign(){
	document.getElementById("verticalPic").style.marginTop = (document.getElementById("cmpPic").offsetHeight - document.getElementById("verticalPic").offsetHeight) / 2 + "px";
}
window.onload = new function () {
	document.getElementById("lastUpdate").innerHTML = "本页面最后修改于" + document.lastModified;
	verticalAlign();
}