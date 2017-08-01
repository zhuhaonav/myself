seajs.config({
    	base:'./node_modules/',
    	alias:{
    		'jquery':'jquery/dist/jquery.js',
    		'jquerySayHello':'./jqModel.js'
    	}
    });

    // seajs.use(['jquery'],function($){
    // 	console.log($);
    // });
    
    seajs.use('./init');
	seajs.use(['jquery','jquerySayHello'],function($){
		$.sayHello();
	})