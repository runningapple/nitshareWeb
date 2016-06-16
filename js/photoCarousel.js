var nowIndex = times = 0, count;
$(document).ready(function() {
	var buttonarry = new Array(".sb1",".sb2",".sb3");
	count = $(".background_list a").length;
	$(".background_list a:not(:first-child)").hide();
	$(buttonarry[nowIndex]).css({"opacity":"0.85"});
	$(".pic_list li").click(function() {
		var index = $(this).val() - 1; //获取Li元素内的值，即1，2，3
		nowIndex = index;
		if (index >= count) return;
		$(buttonarry[(nowIndex+3-1)%3]).css({"opacity":"0.35"});
		$(buttonarry[nowIndex]).css({"opacity":"0.85"});
		$(".background_list a").filter(":visible").fadeOut(500).parent().children().eq(index).fadeIn(1000);
		$(this).toggleClass("on");
		$(this).siblings().removeAttr("class");
		
	});
	
	times = setInterval("showAuto()", 3000);
	$(".pic_list").hover(function() {
		clearInterval(times);
	}, function() {
		times = setInterval("showAuto()", 3000);
	});
})

function slideMethod(){
	var index = $(this).val() - 1;
	nowIndex = index;
	if (index >= count) return;
	$(".background_list a").filter(":visible").fadeOut(500).parent().children().eq(index).fadeIn(1000);
	$(this).toggleClass("on");
	$(this).siblings().removeAttr("class");
}

function showAuto() {
	if (nowIndex >= (count-1)){
		nowIndex = 0;
	} else{
		nowIndex++;
	}
	$(".pic_list li").eq(nowIndex).trigger("click");
}