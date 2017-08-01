// (function($){
// 	$.sayHello = function(){
// 		console.log("hello");
// 	};
// })

(function (factory){
	if (typeof define === 'function') {
		define('jquerySayHello',['jquery'], function(require,exports,moudles){
			factory(require('jquery'));
		});
	} else {
		factory(jQuery);
	}
}(function ($) {
	$.sayHello = function(){
		confirm('Hello！')
	}
}));