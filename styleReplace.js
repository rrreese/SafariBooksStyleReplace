(function(){

	var v = "1.8.2";

	if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
		var done = false;
		var script = document.createElement("script");
		script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
		script.onload = script.onreadystatechange = function(){
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
				initStyleReplace();
			}
		};
		document.getElementsByTagName("head")[0].appendChild(script);
	} else {
		initStyleReplace();
	}
	
	function initStyleReplace() {
		(window.myBookmarklet = function() {
			$(".reader").css("font-family", "Verdana");
			$(".htmlcontent").css("font-family", "Arial");
		})();
	}

})();