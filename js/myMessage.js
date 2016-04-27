$(document).ready(function() {
    /*var num = $(".contentList li").length;
    $(".num").text(num);*/
	$(".con_left li").click(function() {
				$(this).css({
					"background-color": "rgba(255,165,0,0.3)"
			});
			$(this).siblings().css({"background-color":""})
	});
	$(".con_left li").mouseenter(function() {
		$(this).addClass("backcolor");
	});
	$(".con_left li").mouseleave(function() {
		$(this).removeClass("backcolor");
	});
});