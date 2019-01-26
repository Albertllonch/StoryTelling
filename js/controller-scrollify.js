$(function(){
    $.scrollify({
        section : '.section',
		before: function(i,scene) {
			var reload = 0;
			var ref = scene[i].attr("data-section-name");
			if(ref==="mainBG") {
				$(".infoMJ .contentMJ").removeClass("moved");
				reload=0;
			}
			if(ref ==="bothHistory"){
				(function($) {
					var s,
					spanizeLetters = {
					  settings: {
						letters: $('.js-spanize'),
					  },
					  init: function() {
						s = this.settings;
						this.bindEvents();
					  },
					  bindEvents: function(){
						s.letters.html(function (i, el) {
						  //spanizeLetters.joinChars();
						  var spanizer = $.trim(el).split("");
						  return '<span>' + spanizer.join('</span><span>') + '</span>';
						});
					  },
					};
					spanizeLetters.init();
				  })(jQuery);
				  
				  /*animacion 1 */
				  var count1 = $(('#count1'));
				  $({ Counter: 0 }).animate({ Counter: count1.text() }, {
					duration: 2000,
					easing: 'linear',
					step: function () {
					  count1.text(Math.ceil(this.Counter)+ "%");
					}
				  });
				  
				  var s1 = Snap('#animated1');
				  var progress1 = s1.select('#progress1');
				  
				  progress1.attr({strokeDasharray: '0, 113'});
				  
				  Snap.animate(0,113, function( value ) {
					  progress1.attr({ 'stroke-dasharray':value+',251.2'});
				  }, 2000);
				  
				  /*animacion 2 */
				  var count2 = $(('#count2'));
				  $({ Counter: 0 }).animate({ Counter: count2.text() }, {
					duration: 2000,
					easing: 'linear',
					step: function () {
					  count2.text(Math.ceil(this.Counter)+ "%");
					}
				  });
				  
				  var s2 = Snap('#animated2');
				  var progress2 = s2.select('#progress2');
				  
				  progress2.attr({strokeDasharray: '0, 170.8'});
				  
				  Snap.animate(0,170.8, function( value ) {
					  progress2.attr({ 'stroke-dasharray':value+',251.2'});
				  }, 2000);
				  /*animacion 3 */
				  var count3 = $(('#count3'));
				  $({ Counter: 0 }).animate({ Counter: count3.text() }, {
					duration: 2000,
					easing: 'linear',
					step: function () {
					  count3.text(Math.ceil(this.Counter)+ "%");
					}
				  });
				  
				  var s3 = Snap('#animated3');
				  var progress3 = s3.select('#progress3');
				  
				  progress3.attr({strokeDasharray: '0, 218.5'});
				  
				  Snap.animate(0,218.5, function( value ) {
					  progress3.attr({ 'stroke-dasharray':value+',251.2'});
				  }, 2000);
				  /*animacion 4 */
				  var count4 = $(('#count4'));
				  $({ Counter: 0 }).animate({ Counter: count4.text() }, {
					duration: 2000,
					easing: 'linear',
					step: function () {
					  count4.text(Math.ceil(this.Counter)+ "%");
					}
				  });
				  
				  var s4 = Snap('#animated4');
				  var progress4 = s4.select('#progress4');
				  
				  progress4.attr({strokeDasharray: '0, 251.2'});
				  
				  Snap.animate(0,251.2, function( value ) {
					  progress4.attr({ 'stroke-dasharray':value+',251.2'});
				  }, 2000);			
			}
			if(ref==="infoMJ") {
				$(".infoMJ .contentMJ").addClass("moved");
				$(".infoMJ .contentMJ .popup #ball").removeClass("ballhidden");	
				reload = 0;			
			}
			if(ref==="infoLJ") {
				$(".infoMJ .contentMJ").removeClass("moved");
			}
				
				
		},
    });
	
	$(".arrow-down,.scroll-btn").click(function(e) {
		e.preventDefault();

		$.scrollify.next();

	});

});