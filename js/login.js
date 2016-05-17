$(function() {
	/*登录*/
	$("#loginbtn").click(function(){
		var username = $("#usename").val();
		var password = $("#pwd").val();
		if (username.length == 0 && password.length == 0) {
			alert("账号和密码不能为空");
			return;
		}
	    if (username.length == 0 ) {
			alert("手机号/账号不能为空");
			return;
		}
	    if (password.length == 0) {
			alert("密码不能为空");
			return;
		}
	});
		$("#loginbtn").click(function(){
		var account = $("#usename").val();
		var pwd = $("#pwd").val();
		$.ajax({
			type:"GET",
			
			/*这里需要进行跨域请求，论文里可以加以展开说明*/
//			url:"http://localhost:8080/nitshare/serve/test",
			url:"http://127.0.0.1:8080/nitshareserver/serve/user.login",
			//async:false,/*同步*/
			jsonpCallback:'callback',
			data:{
				"account" : account,
				"pwd" : pwd
			},
			dataType:'jsonp',
			success : function(data){
				if (data.length == 0){
					alert("账号不存在");
				}
				else{
					window.location.href="recourse/common/frame.html"
				}
			},
			error : function(XMLHttpRequest, textStatus, errorThrown, data){
				alert("网络错误");
//				$.mobile.changePage("register.html","slidedown",true,true);
				//alert(errorThrown);
			}
		});
	});
});
