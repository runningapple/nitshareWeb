$(function() {
	$(".jqzoom").imagezoom();
	$("#thumblist li a").click(function() {
		//增加点击的li的class:tb-selected，去掉其他的tb-selecte
		$(this).parents("li").addClass("tb-selected").siblings().removeClass("tb-selected");
		//赋值属性
		$(".jqzoom").attr('src', $(this).find("img").attr("mid"));
		$(".jqzoom").attr('rel', $(this).find("img").attr("big"));
	});
	$('a.zhan').click(function() {
		
	});
	$(".hide").click(function(){
	});
});


$(document).ready(function(){
	
	/*读取页面跳转过来携带的参数*/
	var myurl = location.href;
	var id = decodeURI(myurl.split("?")[1].split("&")[0].split("=")[1]);
	
	loadDetail();
	
	function loadDetail(){
		$.ajax({
			type:"get",
			url:"http://localhost:8080/nitshareserver/serve/commodity.detail",
			async:true,//异步刷新
			data:{
				"id": id,
			},
			jsonpCallback:'callback',
			dataType:'jsonp',
			success:function(data){
				if ("test" != data[0].imgUrl0){
					$("#pic1").attr("src",data[0].imgUrl0);
					$("#pic1").attr("mid",data[0].imgUrl0);
					$("#pic1").attr("big",data[0].imgUrl0);
				}
				if ("test" != data[0].imgUrl1){
					$("#pic2").attr("src",data[0].imgUrl1);
					$("#pic2").attr("mid",data[0].imgUrl1);
					$("#pic2").attr("big",data[0].imgUrl1);					
				}
				if ("test" != data[0].imgUrl2){
					$("#pic3").attr("src",data[0].imgUrl2);
					$("#pic3").attr("mid",data[0].imgUrl2);
					$("#pic3").attr("big",data[0].imgUrl2);
				}	
				
				$("#detail_name").append(data[0].cname);
				$("#detail_description").append(data[0].description);
				$("#detail_price").append("￥"+data[0].price);
				$("#detail_place").append(data[0].tradePlace);
				$("#selleritem").append(data[0].uid);
				
				initSwiper();
			},
			error:function(XMLHttpRequest, textStatus, errorThrown, data){
				alert(errorThrown);
			}
		});
	}
	
});
