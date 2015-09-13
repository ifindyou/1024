(function(root,factory){
	root.ldzx.request=factory.call(root,Promise,$,_,ldzx.AJAX);
}(this,function(Promise,$,_,AJAX){
	function getDataByUrl(url,type,params){
		return new Promise(function(resolve,reject){
			$.ajax({
				type:type||'get',
				dataType:'json',
				url:url,
				success:function(data){
					resolve(data);
				},
				data:params||{},
				error:function(error){
					reject(error);
				}
			});
		});
	}
	return _.mapObject(AJAX,function(item,index){
		return function(params){
			return getDataByUrl(item.url,item.type,params);
		}
	});
}));