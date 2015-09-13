	fis.config.set('pack', {
	    '/pkg/main.js': '**.js', 
	    '/pkg/main.css': '**.css'
	});
	fis.config.set('settings.postpackager.simple.autoCombine', true); //按页面顺序自动压缩
	fis.config.set("roadmap.domain", "http://static.baidu.com");
	fis.config.set("roadmap.path", [{
	    // reg: /^\/static\/a\.css$/,
	    reg: /^\/css\/(.+?)\.css$/,
	    release: '/static/release/css/$1.css'
	}, {
	    reg: /^\/js\/(.+?)\.js$/,
	    release: '/static/release/js/$1.js'
	}]);
