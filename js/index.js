$(function() {
    $("div.holder").jPages({
        containerID : "item_list",
        previous : "首页",
        next : "尾页",
        perPage : 5,
        delay : 100
    });
 
				
});
document.charset='utf-8';
$(document).ready(function(){
	
	var pageIndex = parseInt("0");
	var size = parseInt("8");
	var searchName = "";
	
	/**
	 * 种类查询
	 */
	$("#collegebike").click(function(){
		$("#list").empty();
		searchName = "车";
		fuzzyQuery();
		return;
	});

	$("#cloth").click(function(){
		$("#list").empty();
		searchName = "9";
		fuzzyQuery();
		return;
	});
	
	var myurl = location.href;
	
	if (myurl.indexOf("?") > 0){
		var functionType = myurl.split("?")[1].split("&")[0].split("=")[0];
		if (functionType == "date"){
			queryByDate();
		}else{
			searchName= myurl.split("?")[1].split("&")[0].split("=")[1];
			fuzzyQuery();			
		}
	}else {
		getGoods();
	}
	
	/**
	 * 获取最新的商品
	 */
	function queryByDate(){
		$.ajax({
			type:"get",
			url:"http://115.28.73.144:8080/nitshare/serve/commodity.date",
//			url:"http://127.0.0.1:8080/nitshare/serve/commodity.date",
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
							<li class="item" name="'+data[i].id+'">\
								<a href="#" class="img" target="mainframe">\
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
				
				jump();//初始化跳转函数
				
			},
			error: function(XMLHttpRequest, textStatus, errorThrown, data){
				alert(errorThrown);
			}
		});				
	}
	
	
	/**
	 * 商品模糊查询
	 */
	function fuzzyQuery(){
		type = "-1";//-1表示根据商品名查询，如果不为-1，则根据类型查询，根据类型查询还没对应好
		$.ajax({
			type:"get",
			url:"http://115.28.73.144:8080/nitshare/serve/commodity.fuzzy",
			async:true,
			jsonpCallback:'callback',
			dataType:'jsonp',
			data:{
				"name": "'"+searchName+"'",	//查询的商品名
				"type": type,		//类型
				"page": pageIndex,	//第几页 pageIndex
				"size": size,		//条数 size
			},
			success:function(data){
				for (var i = 0; i < data.length; i++){
					var addtext = '\
							<li class="item" name="'+data[i].id+'">\
								<a href="#" class="img" target="mainframe">\
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
				
				jump();//初始化跳转函数
				
			},
			error: function(XMLHttpRequest, textStatus, errorThrown, data){
				alert(errorThrown);
			}
		});		
	}
	
	/*页面跳转函数*/
	function jump(){
		$(".item").click(function(){
			//window.parent.location.href = "detailPage.html?id="+$(this).attr("name")+"&back=1";//"http://1.runningap.applinzi.com/a.html";
			location.href = "goodsDetails.html?id="+$(this).attr("name");
		});		
	}
	
	function getGoods(){
		$.ajax({
			type:"get",
			url:"http://115.28.73.144:8080/nitshare/serve/commodity.get",
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
							<li class="item" name="'+data[i].id+'">\
								<a href="#" class="img" target="mainframe">\
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
				
				jump();//初始化跳转函数
				
			},
			error: function(XMLHttpRequest, textStatus, errorThrown, data){
				alert(errorThrown);
			}
		});
	}
	
});
