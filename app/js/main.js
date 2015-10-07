(function() {
  'use strict';

  // Detecting IE
	var regexp = /MSIE (\d+\.\d+);/;
	if (regexp.test(navigator.userAgent)) {
	  var ie = new Number(RegExp.$1);
	}

	var app = {

		winW : window.innerWidth,

		init: function() {

			this.events();
			if(ie < 9) {
				this.patchFlex();
			}
		},
		events: function() {
		  window.addEventListener('resize', function(){
				app.winW = window.innerWidth;
				if(ie < 9) {
					app.patchFlex();
				}
			});
		},
		patchFlex: function() {
			var form = document.getElementsByClassName('form')[0];
			var formH = form.offsetHeight;
			var InfoContent = document.getElementsByClassName('block--content')[0];

			if (app.winW >= 768) {
				InfoContent.style.height = formH +'px';
			}else{
				InfoContent.style.height = 'inherit';
			}

		}
	};
	app.init();

}());
