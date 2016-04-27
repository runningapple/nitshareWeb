$(function() {
    $("div.holder").jPages({
        containerID : "item_list",
        previous : "首页",
        next : "尾页",
        perPage : 5,
        delay : 100
    });
 
				
});

$(document).ready(function(){
	
	var pageIndex = parseInt("1");
	var size = parseInt("6");
	
//	init();
	
//	function init(){
//		var addtext = '\
//				<li class="item">\
//					<a href="goodsDetails.html" class="img" target="mainframe">\
//						<img src="img/example.jpg" alt="MacbookPro 13寸 12年版">\
//					</a>\
//					<div class="info">\
//						<div class="price">3500</div>\
//						<div class="name">\
//							<a href="#" target="_blank">MacbookPro 13寸 12年版</a>\
//						</div>\
//						<div class="department"><span>计算机12级(学号认证)</span></div>\
//					</div>\
//				</li>\
//				';
//		
//		for (var i = 0; i < 10; i++){
//			$("#list").append(addtext);
//		}
//		
//	}
	
	getGoods();
	
	function getGoods(){
		$.ajax({
			type:"get",
			url:"http://localhost:8080/nitshare/serve/commodity.get",
			async:true,
			jsonpCallback:'callback',
			dataType:'jsonp',
			data:{
				"page": pageIndex,	//第几页 pageIndex
				"size": size,		//条数 size
			},
			success:function(data){
				for (var i = 0; i < data.length; i++){
					var addtext = '\
							<li class="item">\
								<a href="goodsDetails.html" class="img" target="mainframe">\
									<img src="'+data[i].imgUrl0+'" alt="'+data[i].cname+'">\
								</a>\
								<div class="info">\
									<div class="price">￥'+data[i].price+'</div>\
									<div class="name">\
										<a href="#" target="_blank">'+data[i].cname+'</a>\
									</div>\
									<div class="department"><span>计算机12级(学号认证)</span></div>\
								</div>\
							</li>\
							';
					$("#list").append(addtext);
				}
				
				
			},
			error: function(XMLHttpRequest, textStatus, errorThrown, data){
				alert(errorThrown);
			}
		});
	}
	
});