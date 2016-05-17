$(document).ready(function() {
	$("#registerBtn").click(function(){
		var nickname = $("#nickname").val();
		var account = $("#userId").val();
		var pwd_one = $("#password1").val();
		var pwd_two = $("#password2").val();
		if (pwd_one != pwd_two) {
			//输入的两次密码不一致
			alert("两次输入的密码不一致");
			return;
		} 
		$.ajax({
			type:"get",
			url:"http://127.0.0.1:8080/nitshareserver/serve/user.register",
			async:false,
			data:{
				"nickname":nickname,
				"account":account,
				"pwd":pwd_one
			},
			jsonpCallback:'callback',
			dataType:'jsonp',
			success:function(data){
				alert(data);
			},
			error:function(XMLHttpRequest, textStatus, errorThrown, data){
				alert(errorThrown);
			}
		});
	});
	var currentShowCity = 0;
	$("#college").change(function() {
		$("#college option").each(function(i, o) {
			if ($(this).attr("selected")) {
				$(".major").hide();
				$(".major").eq(i).show();
				currentShowCity = i;
			}
		});
	});
	$("#college").change();
});

