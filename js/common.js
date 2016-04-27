$(document).ready(function() {
	$(".contentleft li").click(function() {
		$(this).css({
			"background-color": "#1abaad"
		});
		$(this).siblings().css({
			"background-color": ""
		});
	});
	$(".contentleft li").mouseenter(function() {
		$(this).addClass("bgcolor");
		$(this).children(".sub_nav").show();
	});
	$(".contentleft li").mouseleave(function() {
		$(this).removeClass("bgcolor");
		$(this).children(".sub_nav").hide();
	});


});