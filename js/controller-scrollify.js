$(function(){
    $.scrollify({
        section : '.section',
		before: function(i,scene) {
			
			var ref = scene[i].attr("data-section-name");
			if(ref==="mainBG") {
				$(".infoMJ .contentMJ").removeClass("moved");
				
			}
			if(ref ==="bothHistory"){
				
			}
			if(ref==="infoMJ") {
				$(".infoMJ .contentMJ").addClass("moved");
				$(".infoMJ .contentMJ .popup #ball").removeClass("ballhidden");				
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