$(function(){
	login();
	var data=JSON.parse(localStorage.user);
	//监听dhIndex 变化
// 	var lastTimeValue=dhIndex.index;
// 	Object.defineProperty(dhIndex, 'index', {
// 	  get: function() {
// 		console.log('get：' + index);
// 		return index;
// 	  },
// 	  set: function(value) {
// 		index = value;
// 		if(lastTimeValue!=index){
// 			lastTimeValue=index;
// 			console.log('value changed!! set: ' + index);
// 		}
// 	  }
// 	});
// 	
	$.get(url()+'/api/order_list_s',data,function(data){
		if(data.status==200){
			var data=data.data;
			if(!data){
				return;
			}
			for(var i=0;i<data.length;i++){
				if(data[i].pay_status==1){
					var date=dateTime(data[i].update_time);
					$('#item1mobile>.mui-table-view').append(
					`<li class="mui-table-view-cell" data-order=${data[i].order}>
							<a class="mui-navigate-right">
								<span style="font-size: 20px;">${date}</span><br>
								<span style="font-size: 18px;color: red;display: inline-block;margin-top: 10px;">+${data[i].money}￥</span>
								<span style="float: right;color: green;font-size: 20px;margin:8px 25px;">成功</span>
								<span style="display: block; margin-top: 10px;font-size: 10px;color: #CCCCCC;">订单编号:${data[i].order}</span>
							</a>
						</li>`)
				}
			}	
		}else if(data.status==-1){
			if(data.data){
				mui.toast(data.data)
			}
			
		}
	})
	
	$.get(url()+'/api/order_list_c',data,function(data){
		if(data.status==200){
			var data=data.data;
			for(var i=0;i<data.length;i++){
				if(data[i].pay_status==0){
					var date=dateTime(data[i].create_time);
					$('#item2mobile>.mui-table-view').append(
					`<li class="mui-table-view-cell" data-order=${data[i].order}>
						<a class="mui-navigate-right">
								<span style="font-size: 20px;">${date}</span><br>
								<span style="font-size: 18px;color: red;display: inline-block;margin-top: 10px;">+${data[i].money}￥</span>
								<span style="float: right;font-size: 16px;margin:8px 25px;">正在处理</span>
								<span style="display: block; margin-top: 10px;font-size: 10px;color: #CCCCCC;">订单编号:${data[i].order}</span>
						</a>
					</li>`)
				}
			}	
		}else if(data.status==-1){
			if(data.data){
				//mui.toast(data.data)
			}	
		}
	})
	
	
	$('.mui-slider-group').on("click",".mui-table-view-cell",function(e){
		var order=e.currentTarget.dataset.order;
		if(!order){
			return;
		}
		location.href='Prepaid_phone_details.html?order='+order
	})
})