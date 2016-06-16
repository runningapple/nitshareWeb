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

	$("#searchbtn").click(function(){
		var name = $("#search").val();
		$("#searchbtn").attr('href','../../index.html?name='+name);
	});
	
	$("#latestbtn").click(function(){
		$("#latestbtn").attr('href','../../index.html?date=on');
	});
	
	if (localStorage.id != "null"){
		$(".logbtn").remove();
	}else {
		$("#logoutbtn").remove();
	}
	
	$("#logoutbtn").click(function(){
		localStorage.id = null;
		localStorage.account = null;
	});
});