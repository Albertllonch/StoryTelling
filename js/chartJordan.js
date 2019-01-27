function disball(){
    document.getElementById("ball").className = "ballhidden";
}
// When the user clicks on <div>, open the popup
function myMJChart() {
  var popup = document.getElementById("myPopup");
  

  var barChart = dc.barChart('#myPopup');
    d3.csv("data/jordan_career.csv", function(errors,people){
        var mycrossfilter = crossfilter(people);
        
        // gender dimension
        var ptsDimension = mycrossfilter.dimension(function(data) { 
            return data.pts;
         });
         
        var pts = ptsDimension.group().reduceCount();
        barChart
            .width(800)
            .height(300)
            .x(d3.scaleLinear().domain([15,70]))
            .brushOn(false)
            .yAxisLabel("Count")
            .xAxisLabel("Pts")
            .dimension(ptsDimension)
            .group(pts)
            .on('renderlet', function(chart) {
            chart.selectAll('rect').on('click', function(d) {
                console.log('click!', d);
            });
        });
        
        dc.renderAll();

    })  
    
    popup.classList.toggle("show");
}

function myLJChart() {
    var popup = document.getElementById("myPopup");
    
  
    var barChart = dc.barChart('#myPopup');
      d3.csv("data/lebron_career.csv", function(errors,people){
          var mycrossfilter = crossfilter(people);
          
          // gender dimension
          var ptsDimension = mycrossfilter.dimension(function(data) { 
              return data.pts;
           });
           
          var pts = ptsDimension.group().reduceCount();
          barChart
              .width(800)
              .height(300)
              .x(d3.scaleLinear().domain([15,70]))
              .brushOn(false)
              .yAxisLabel("Count")
              .xAxisLabel("Pts")
              .dimension(ptsDimension)
              .group(pts)
              .on('renderlet', function(chart) {
              chart.selectAll('rect').on('click', function(d) {
                  console.log('click!', d);
              });
          });
          
          dc.renderAll();
  
      })  
      
      popup.classList.toggle("show");
  }

