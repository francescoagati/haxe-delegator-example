(function (console) { "use strict";
var FooBar2 = function() {
};
FooBar2.prototype = {
	sum: function(a,b) {
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
	var tmp;
	console.log("x");
	tmp = gina[pina];
	tmp;
	var tmp1;
	console.log(["x","ss"]);
	tmp1 = gina[pina];
	tmp1;
	"ss";
	x.sum(1,2);
	x.sum2(1,2,3);
	db.settings.password = "ddd";
	"ddd";
	db.settings.username = "eee";
	"eee";
};
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
