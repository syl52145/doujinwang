function url(){
	return 'http://19123.dgxq.com'
}


function dateTime(timestamp){
	  if(timestamp.toString().length<=10){
	    var d = new Date(timestamp * 1000);// 时间戳为10位需*1000，时间戳为13位的话不需乘1000
	  }else{
	    var d = new Date(timestamp);// 时间戳为10位需*1000，时间戳为13位的话不需乘1000
	  }
	  
	  let yyyy = d.getFullYear() + '-';
	  let MM = (d.getMonth()+1 < 10 ? '0'+(d.getMonth()+1) : d.getMonth()+1) + '-';
	  let dd = d.getDate() + ' ';
	  let HH = d.getHours() + ':';
	  let mm = d.getMinutes() + ':';
	  let ss = d.getSeconds();
	  return yyyy + MM + dd; 
	}
	
function dateTimes(timestamp){
	  if(timestamp.toString().length<=10){
	    var d = new Date(timestamp * 1000);// 时间戳为10位需*1000，时间戳为13位的话不需乘1000
	  }else{
	    var d = new Date(timestamp);// 时间戳为10位需*1000，时间戳为13位的话不需乘1000
	  }
	  
	  let yyyy = d.getFullYear() + '-';
	  let MM = (d.getMonth()+1 < 10 ? '0'+(d.getMonth()+1) : d.getMonth()+1) + '-';
	  let dd = d.getDate() + '';
	  let HH = d.getHours() + ':';
	  let mm = d.getMinutes() + ' ';
	  let ss = d.getSeconds();
	  return yyyy + MM + dd +'<span style="font-size:17px;margin-left:8px;">'+ HH + mm +'</span>'; 
	}
	
function goIndex(){
	location.href='../index.html'
}

function  getNum(){
	var uri = window.location.href;
	uri = uri.split('=')[1]
	var reg = /^\d+$/;
	if(reg.test(uri)){
		return uri
	}else{
		mui.toast('参数错误！')
		return;
	}
	
}

function user(){
	var user=localStorage.user;
	if(!user){
		return;
	}
	user =JSON.parse(user);
	return user
}

function isOk(dataUrl){
	var data = user();
	if(data){
		$.get(url()+'/api/member_xinxi',data,function(res){
			//console.log(res);
			if(res.status==200){
				sessionStorage.ook=true;
				if(dataUrl){
					location.href=dataUrl;
				}		
			}
			if(res.status==1){
				sessionStorage.removeItem('ook');
				mui.toast(res.data);
				Href('Bank_card_binding.html');
			}
			if(res.status==2){
				sessionStorage.removeItem('ook');
				mui.toast(res.data);
				Href('Id_Card_Binding.html');
			}
		})
	}
}

if(!sessionStorage.ook){
	var timeOut = setTimeout(function(){
		isOk();
	},200)	
}



function loginIndex(){
	var login = localStorage.user;
	if(!login){
		location.href = 'page/The_Login.html'
	}
}
function login(){
	var login = localStorage.user;
	if(!login){
		location.href = 'The_Login.html'
	}
}
function Href(url){
	setTimeout(function(){
		location.href=url
	},1000)
}



//扩展mui.showLoading
(function($, window) {
    //显示加载框
    $.showLoading = function(message,type) {
        if ($.os.plus && type !== 'div') {
            $.plusReady(function() {
                plus.nativeUI.showWaiting(message);
            });
        } else {
            var html = '';
            html += '<i class="mui-spinner mui-spinner-white"></i>';
            html += '<p class="text">' + (message || "数据加载中") + '</p>';

            //遮罩层
            var mask=document.getElementsByClassName("mui-show-loading-mask");
            if(mask.length==0){
                mask = document.createElement('div');
                mask.classList.add("mui-show-loading-mask");
                document.body.appendChild(mask);
                mask.addEventListener("touchmove", function(e){e.stopPropagation();e.preventDefault();});
            }else{
                mask[0].classList.remove("mui-show-loading-mask-hidden");
            }
            //加载框
            var toast=document.getElementsByClassName("mui-show-loading");
            if(toast.length==0){
                toast = document.createElement('div');
                toast.classList.add("mui-show-loading");
                toast.classList.add('loading-visible');
                document.body.appendChild(toast);
                toast.innerHTML = html;
                toast.addEventListener("touchmove", function(e){e.stopPropagation();e.preventDefault();});
            }else{
                toast[0].innerHTML = html;
                toast[0].classList.add("loading-visible");
            }
        }   
    };

    //隐藏加载框
      $.hideLoading = function(callback) {
        if ($.os.plus) {
            $.plusReady(function() {
                plus.nativeUI.closeWaiting();
            });
        } 
        var mask=document.getElementsByClassName("mui-show-loading-mask");
        var toast=document.getElementsByClassName("mui-show-loading");
        if(mask.length>0){
            mask[0].classList.add("mui-show-loading-mask-hidden");
        }
        if(toast.length>0){
            toast[0].classList.remove("loading-visible");
            callback && callback();
        }
      }
})(mui, window);

//导航栏下标

if(document.getElementById('slider')){
	var dhIndex = {};
	dhIndex.index = 0;
	//console.log(dhIndex.index)
	document.getElementById('slider').addEventListener('slide', function(e) { //监听切换下标
		if (e.detail.slideNumber === 0) {
			//console.log(0)
			return dhIndex.index=0;
		}
		if (e.detail.slideNumber === 1) {//微信
			//console.log(1)
			return dhIndex.index = 1;
			
		}
		if (e.detail.slideNumber === 2) {//支付宝
			//console.log(2)
			return dhIndex.index = 2;
		}
})
}

var win_h = $(window).height();//关键代码
	window.addEventListener('resize', function () {
		if($(window).height() < win_h){
			$('.btn-pos').hide();
		}else{
			$('.btn-pos').show();
		}
	});