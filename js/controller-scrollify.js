
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
				$(".mast__text").text("Después de 1072 partidos y más de 41 mil minutos jugados, estas son las estadísticas de una leyenda:");
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