function lebronCharts(){

    var yearChart = dc.pieChart('#chart-years'),
        statsChart = dc.barChart("#chart-stats"),
        equiposRowChart = dc.rowChart("#chart-row-team");


    d3.csv('data/lebron_career.csv').then(function(lebron){

        var crossfilterLebron = crossfilter(lebron);
        yearDim  = crossfilterLebron.dimension(function(d) {
            var y = d.date.split('-');
            return y[0];
        }),
        statsDim = crossfilterLebron.dimension(function(d) {return d.pts;}),
        equiposDim  = crossfilterLebron.dimension(function(d) {return d.team;});
        years = yearDim.group(),
        team = equiposDim.group().reduceCount(),
        statsGroup  =  statsDim.group().reduceCount();

        console.log(team.all())
        yearChart
            .width(300)
            .height(300)
            .dimension(yearDim)
            .group(years)
            .innerRadius(50)
            .controlsUseVisibility(true);

        statsChart
            .width(600)
            .dimension(statsDim)
            .group(statsGroup)
            .x(d3.scaleLinear().domain([0,70]))
            .elasticY(true)
            .controlsUseVisibility(true);

        equiposRowChart
            .dimension(equiposDim)
            .group(team)
            .elasticX(true)
            .controlsUseVisibility(true);
        
            
        yearChart.render();
        statsChart.render();
        equiposRowChart.render();
   });
   
   
}