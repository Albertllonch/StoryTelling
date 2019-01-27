
$(function(){
    $.scrollify({
        section : '.section',
		before: function(i,scene) {
			var ref = scene[i].attr("data-section-name");
			if(ref==="mainBG") {
				$(".infoMJ .contentMJ").removeClass("moved");
			}
			if(ref ==="bothHistory"){
				$(".mast__title").text("Michael Jordan");
				$(".mast__text").text("Estadísticas de una leyenda.");
				cargarMJAni();
			}
			if(ref==="infoMJ") {
				$(".infoMJ .contentMJ").addClass("moved");
				$(".infoMJ .contentMJ .popup #ball").removeClass("ballhidden");
				cargarGraficaYears();	
			}
			if(ref==="infoLJ") {
				$(".infoMJ .contentMJ").removeClass("moved");
				lebronCharts();
			}
				
				
		},
    });
	
	$(".arrow-down,.scroll-btn").click(function(e) {
		e.preventDefault();

		$.scrollify.next();

	});

});