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
	
	getDetail();
	
	/**
	 * 获取用户信息
	 */
	function getDetail(){
		$.ajax({
			type:"get",
			url:"http://115.28.73.144:8080/nitshare/serve/user.detail",
//			url:"http://localhost:8080/nitshareserver/serve/user.detail",
			async:true,
			jsonpCallback:'callback',
			dataType:'jsonp',
			data:{
				"id": localStorage.id,	//用户id
			},
			success:function(data){
				$("#nickname").val(data[0].nickname);
				$("#mail").val(data[0].mail);
				$("#qq").val(data[0].qq);
				$("#mobile").val(data[0].mobile);
				
			},
			error: function(XMLHttpRequest, textStatus, errorThrown, data){
				alert(errorThrown);
			}
		});		
	}
	
	/**
	 * 更新用户信息
	 */
	$("#save").click(function(){
		$.ajax({
			type:"get",
			url:"http://115.28.73.144:8080/nitshare/serve/user.update",
//			url:"http://localhost:8080/nitshareserver/serve/user.update",
			async:true,
			jsonpCallback:'callback',
			dataType:'jsonp',
			data:{
				"id": localStorage.id,	//用户id
				"nickname": $("#nickname").val(),
				"mail": $("#mail").val(),
				"qq": $("#qq").val(),
				"mobile": $("#mobile").val()
				
			},
			success:function(data){
				alert("修改成功");
				window.location.href = "index.html";
			},
			error: function(XMLHttpRequest, textStatus, errorThrown, data){
				alert(errorThrown);
			}
		});			
	});
});