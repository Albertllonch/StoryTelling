
function cargarGraficaYears(){

    var chart = dc.rowChart('#chartYears');

    d3.csv('data/jordan_career.csv').then(function(jordan){  
        var crossfilterJordan = crossfilter(jordan);
        
        dateDimension = crossfilterJordan.dimension(function(d){
            var y = d.date.split('-');
            return y[0];
        })
        groupByYear = dateDimension.group();
        console.log(groupByYear);

        chart
            .width(400)
            .height(500)
            .ordinalColors(['white'])
            .dimension(dateDimension)
            .group(groupByYear)
            .ordering(function(d){return d.key;})
            .on('renderlet', function(chart) {
                chart.selectAll('rect').on('click', function(d) {
                    chart.select('rect').text(d.value);
                })
            });
            
        chart.render();
    });

}


