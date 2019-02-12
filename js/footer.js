 
// 底部导航方法
(function footer() {
	$.ajaxSettings.async = false;
	$("body").append("<div class='footers'></div>");
	var data = {
		len: 1,
		tpl: "footer",
		dom: ".footers"
	};
 
	getMuBan(data.tpl, data.dom);
 
})()
 
// 跳转方法
function changeLocation(p) {
	createNew = true;
	//跳转动画效果
	var ani = p.ani ? p.ani : "slide-in-right";
	mui.openWindow({
		url: p.page,
		id: p.id,
		createNew: createNew,
		extras: {},
		show: {
			autoShow: true, //页面loaded事件发生后自动显示，默认为true
			aniShow: ani, //页面显示动画，默认为”slide-in-right“；
		},
		waiting: {
			autoShow: false
		}
	});
}
 
// 获取模板html 参数文件名 
function getMuBan(tpl, dom) {
	//获取当前页面名称
	var cpn = getUrlFileNoExt(location.href);
	// //当选页面替换icon
	// var menuObj = {
	// 	index: "weizhi",
	// 	xiaoshipin: "ai-video",
	// 	shangcheng: "shangcheng",
	// 	wode: "wode"
	// };
	// //要删除的icon
	// var rmenuObj = {
	// 	index: "weizhi",
	// 	xiaoshipin: "ai-video",
	// 	shangcheng: "shangcheng",
	// 	wode: "wode"
	// };
	
	if(cpn=='index'){
		var str = "./common/" + tpl + ".html";
	}else{
		var str = "../common/" + tpl + ".html";
	}
	$.get(str, function(data) {
		$(data).replaceAll('.footers')
		footerLI(cpn);
		// 导航点击事件
		$(document).on("tap", ".mui-tab-item", function() {
			$('.mui-tab-item').removeClass('mui-active');
			var listId = $(this).attr("id");
			sessionStorage.tabId = listId;
			//console.log(cpn)
			if(listId==cpn){
				var str = "./" + listId + ".html";
			}else{
				if(cpn == 'index'){
					var str = "page/" + listId + ".html";
				}else{
					if(listId=='index'){
						var str = "../" + listId + ".html";
					}else{
						var str = "./" + listId + ".html";
					}	
				}	
			}
			
			var p = {
				id: listId,
				page: str
			}
			changeLocation(p);
 
		})
	});
}
 
// 改变导航样式
function footerLI(ids) {
			//找到对应的key，替换icon	
		if(ids == "") {
			//lddClient/html/pages/
			$("#index").addClass("mui-active");
		}
        $("a#" + ids).addClass('mui-active');  
// 		console.log($("#index"))
// 		console.log($(".footers #" + ids))
		
	
}
 
// 获取当前页面网址 //缓存id
function getUrlFileNoExt(url) {
 	url = url || location.href;
 	var back = getUrlFileName(url);
 	var tabId = back.split(".")[0];
	if(tabId=='index' || tabId=='order' || tabId=='center'){
		return tabId
	}else{
		var tabId = sessionStorage.tabId;
		if(!tabId){
			return 'index';
		}else{
			return tabId;
		}
	}
	
}
function getUrlFileName(url) {
	var tmp = new Array(); //临时变量，用于保存分割字符串
	tmp = url.split("/"); //按照"/"分割
	var cc = tmp[tmp.length - 1]; //获取最后一部分，即文件名和参数
	tmp = cc.split("?"); //把参数和文件名分割开
	return tmp[0]; //返回值
}
