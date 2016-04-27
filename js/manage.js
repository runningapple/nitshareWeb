$(document).ready(function() {
	var request = function(type, _url, dataOb, successCallback, errorCallback) {
		$.ajax({
				type: type,//"Get"或"Post"
				url:"http://192.168.199.109:8080/nitshare/serve/user.register",
				data: dataOb,
				async:false,
				success: successCallback,
				error: errorCallback
			});
	};
	var userdatagrid = $("#userTable").datagrid({
			url:url+new Date().getTime(),
			autoload:true,
		    parse:function(data){
		    	//console.log(data);
		    	var mydata = {};
		    	if(data.ResultStatus == 1){
			    	mydata.data = data.ResultData;
			    	for(var i=0; i<data.ResultData.length; i++){
			    			mydata.data[i].index = i+1;
			    	}
			    	mydata.total = data.Total;
			    	return mydata;
		    	}else{
		    		mydata.data = "";
		    		return mydata;
		    	}
			    	
		    },
		    noData: "没有数据",
		    pager: "default", // plugin
	    	pagerPosition: "bottom",
			attr: {"class":"tableStyle"},
			col:[{
				field:"index",
				title:"序号",
				attrHeader: {"class":"th"},
			},{
				field:"id",
				title:"账号",
				attrHeader: {"class":"th none"},
				attr:{"class":"none"}
			},{
				field:"nickname",
				title:"昵称",
				attrHeader: {"class":"th"},
			},{
				field:"mobile",
				title:"手机号码",
				attrHeader: {"class":"th"},
			},{
				field:"mail",
				title:"电子邮箱",
				attrHeader: {"class":"th"},
			},{
				field:"QQ",
				title:"qq",
				attrHeader: {"class":"th"},
			},{
				field:"",
				title:"操作",
				attrHeader: {"class":"th"},
				render:function(){
	                return "<img src='../resources/images/edit.png' class='editIcon'/><img src='../resources/images/delete.png' class='deleteIcon'/>";
	            }
			}],paramsMapping: {
	            page: "pageNo",
	            paging:"pageSize"
	        },paramsDefault: {
				pageSize:15
			},pager:"bootstrap",
			onBefore: function() {
				//$eventsInfo.html( "Datagrid loading ..." );
				
			},
			onData: function( data ) {
				//console.log("ondata"+params.pageSize);
				//$eventsInfo.html( data.total + " countries" );
			}
	});		
	userdatagrid.datagrid( "filters","#aaaa");
	

});