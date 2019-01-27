function lebronCharts(){

    var yearChart = dc.pieChart('#chart-years'),
        statsChart = dc.barChart("#chart-stats"),
        equiposRowChart = dc.rowChart("#chart-row-team");

    var table = dc.dataTable('#table');

    d3.csv('data/lebron_career.csv').then(function(lebron){

        var crossfilterLebron = crossfilter(lebron);
        yearDim  = crossfilterLebron.dimension(function(d) {
            var y = d.date.split('-');
            return y[0];
        }),
        statsDim = crossfilterLebron.dimension(function(d) {return d.pts;}),
        equiposDim  = crossfilterLebron.dimension(function(d) {return d.team;});
        years = yearDim.group(),
        team = equiposDim.group().reduceSum(function(d) {return +d.team;}),
        statsGroup  =  statsDim.group().reduceCount();

        yearChart
            .width(300)
            .height(300)
            .dimension(yearDim)
            .group(years)
            .innerRadius(50)
            .controlsUseVisibility(true);
/*
        statsChart
            .dimension(statsDim)
            .group(statsGroup)
            .elasticY(true)
            .controlsUseVisibility(true);

        equiposRowChart
            .dimension(equiposDim)
            .group(team)
            .elasticX(true)
            .controlsUseVisibility(true);*/
        
        yearChart.render();
        console.log('rendered');
   });
   
   
}