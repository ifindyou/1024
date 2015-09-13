(function(){
	ldzx = window.ldzx || {};
	ldzx.userId=null;
	ldzx.AJAX={
		getCovers:{
			url:'model/covers.json',
			type:'get'
		},
		getMagazine:{
			url:'model/magazine'+Math.ceil(Math.random()*3)+'.json',
			type:'get'
		},
		getShapes:{
			url:'model/shapes.json',
			type:'get'
		}
	};
}());