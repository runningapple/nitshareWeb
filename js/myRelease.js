$(function() {
	$("#mr_description").keydown(function() {
		var len = $("#mr_description").val().length;
		if (len > 200) {
			var num = $("#mr_description").val().substr(0, 199);
			$("#mr_description").val(num);
		} else {
			$(".word").text($("#mr_description").val().length);
		}
	});
	

});


$(document).ready(function(){
	
	
	if (localStorage.id == "null"){
		alert("登录后才能发布商品");
		window.location.href = "index.html";
	}
	/**
	 *图片上传方法 
	 */
	function ajaxFileUpload(){
		var formData = new FormData();
		formData.append('file',$("#filepic")[0].files[0]);	//将文件转成二进制形式
		formData.append("uid","1");
		$.ajax({
			type:"post",
			url:"http://115.28.73.144:8080/nitshare/serve/fileupload",
			async:false,
			contentType: false,	//这个一定要写
			processData: false, //这个也一定要写，不然会报错
			data:formData,
			dataType:'json',	//返回类型，有json，text，HTML。这里并没有jsonp格式，所以别妄想能用jsonp做跨域了。
			success:function(data){
				alert("提交成功，请继续填写商品详细信息");
			},
			error:function(XMLHttpRequest, textStatus, errorThrown, data){
				alert(errorThrown);
			}
		});
	}
	
	$("#subpic").click(function(){
		ajaxFileUpload();
	});
	
	$("#mr_release").click(function(){
		var cname = $("#mr_name").val();
		var price = $("#mr_price").val();
		var description = $("#mr_description").val();
		var bargain = $("#mr_discount option:selected").val();
		var uid = localStorage.id;//用户id
		$.ajax({
			type:"get",
			url:"http://115.28.73.144:8080/nitshare/serve/commodity.add",
			async:false,
			data:{
				"cname":cname,
				"price":price,
				"description":description,
				"bargain":bargain,
				"uid":uid
			},
			jsonpCallback:'callback',
			dataType:'jsonp',
			success:function(data){
				alert("添加成功");
				window.location.href = "index.html?date=on";
			},
			error:function(XMLHttpRequest, textStatus, errorThrown, data){
				alert(errorThrown);
			}
		});
	});
    /**
     * 如果图片改变则上传图片到服务器，并返回图片地址
     */
//  $("#filepic").change(function(){
//  	ajaxFileUpload();
//	});
});
