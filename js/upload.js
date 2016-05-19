
$(document).ready(function(){
	
	function ajaxFileUpload(){
		var formData = new FormData();
		formData.append('file',$("#file_upload")[0].files[0]);	//将文件转成二进制形式
		$.ajax({
			type:"post",
			url:"http://localhost:8080/nitshareserver/serve/fileupload",
			async:false,
			contentType: false,	//这个一定要写
			processData: false, //这个也一定要写，不然会报错
			data:formData,
			dataType:'text',	//返回类型，有json，text，HTML。这里并没有jsonp格式，所以别妄想能用jsonp做跨域了。
			success:function(data){
				alert(data);
			},
			error:function(XMLHttpRequest, textStatus, errorThrown, data){
				alert(errorThrown);
			}			
		});
	}
	
	$("#upload").click(function(){
		ajaxFileUpload();
	});
});
