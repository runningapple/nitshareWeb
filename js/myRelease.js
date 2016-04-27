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
	

    /**
     * 如果图片改变则上传图片到服务器，并返回图片地址
     */
    $("#filepic").change(function(){
    	alert($(this).val());
	    $("#picdiv").ajaxSubmit({
	    	type: "POST",
	    	url: "http://localhost:8080/nitshare/serve/uploadfile",
	    	dataType: "jsonp",
			jsonpCallback:'callback',
	    	success: function(data){
	    		alert("in");
	    	},
	    	error: function(XmlHttpRequest,textStatus,errorThrown){
	    		alert("error");
	    	}
	    });
	});
});
