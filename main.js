(function (console) { "use strict";
var FooBar2 = function() {
};
FooBar2.prototype = {
	get_x: function() {
		var tmp;
		console.log("x");
		tmp = gina[pina];
		return tmp;
	}
	,set_x: function(param) {
		var tmp;
		var tmp1;
		console.log(["x",param]);
		tmp1 = gina[pina];
		tmp1;
		tmp = param;
		return tmp;
	}
	,sum: function(a,b) {
		console.log(["sum","foo",[a,b]]);
		return;
	}
	,sum2: function(a,b,c) {
		console.log(["sum2","bar",[a,b,c]]);
		return;
	}
};
var Main = function() { };
Main.main = function() {
	var x = new FooBar2();
	x.get_x();
	x.set_x("ss");
	x.sum(1,2);
	x.sum2(1,2,3);
};
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
