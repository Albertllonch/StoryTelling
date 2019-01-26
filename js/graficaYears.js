
function cargarGraficaYears(){
    console.log('dentro');
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
            .dimension(dateDimension)
            .group(groupByYear)
            .ordering(function(d){return d.key;})
            .on('renderlet', function(chart) {
                chart.selectAll('rect').on('click', function(d) {
                    console.log('click!', d);
                });
            });
        chart.render();
    });

}


