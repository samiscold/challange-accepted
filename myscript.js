window.onload = function  () {

    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "light2",
        exportFileName: "Doughnut Chart",
        exportEnabled: true,
        animationEnabled: true,
      
        legend:{
            cursor: "pointer",
            itemclick: explodePie
        },
        data: [{
            type: "doughnut",
            innerRadius: 90,
            showInLegend: true,
            
            indexLabel: "{name} - #percent%",
            dataPoints: [
                { y: 166, name: "Femra" },
                { y: 196, name: "Meshkuj" },
                { y: 148, name: "Pa Konfirmuar" }
               
            ]
        }]
    });
    chart.render();
    
    function explodePie (e) {
        if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
            e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
        } else {
            e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
        }
        e.chart.render();
    }
    
    

    {
    const dataSource = {
        chart: {
         
      
          xaxisname: "Qyteti",
          theme: "fusion"
        },
        data: [
          {
            label: "Ferizaj ",
            value: "90"
          },
          {
            label: "Malishevev",
            value: "70"
          },
          {
            label: "Prishtine",
            value: "65"
          },
          {
            label: "Vitina",
            value: "45"
          },
          {
            label: "Prizren",
            value: "34"
          },
          {
            label: "Suvareke",
            value: "33"
          },
          {
            label: "Mitrovica e Veriut",
            value: "31"
          },
          {
            label: "Mitrovica e Veriut",
            value: "31"
          },
          {
            label: "Gjilan",
            value: "29"
          },
          
           {
            label: "Gjilan",
            value: "29"
          },
          {
            label: "Kamenice",
            value: "26"
          },
           {
            label: "Vucitern",
            value: "24"
          },
           {
            label: "Zubin Potok",
            value: "20"
          },
           {
            label: "Zvecan",
            value: "18"
          },
           {
            label: "Gjakove",
            value: "16"
          },
           {
            label: "Shtimje",
            value: "16"
          },
          {
            label: "Lipjan",
            value: "15"
          },
          {
            label: "Peje",
            value: "15"
          },
          {
            label: "Leposavic",
            value: "11"
          },
          {
            label: "Leposavic",
            value: "11"
          },
            {
            label: "Podujev",
            value: "9"
          },
            {
            label: "Elez Han",
            value: "7"
          },
          {
            label: "Fushe Kosove",
            value: "7"
          }
        ]
      };
      
      FusionCharts.ready(function() {
        var myChart = new FusionCharts({
          type: "column2d",
          renderAt: "chart-container",
          width: "80%",
          padding: "50px",
          height: "30%",
          dataFormat: "json",
          dataSource
        }).render();
      });
    }
}

am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

// Add data
chart.data = [{
  "date": "2020-03-22",
  "value": 0
}, {
  "date": "2020-03-23",
  "value": 0
}, {
  "date": "2020-03-24",
  "value": 0
}, {
  "date": "2020-03-25",
  "value": 0
}, {
  "date": "2020-03-26",
  "value": 0
}, {
  "date": "2020-03-27",
  "value": 0
}, {
  "date": "2020-03-28",
  "value": 0
}, {
  "date": "2020-03-29",
  "value": 0
}, {
  "date": "2020-03-30",
  "value": 0
}, {
  "date": "2020-03-31",
  "value": 0
}, {
  "date": "2020-04-01",
  "value": 0
}, {
  "date": "2020-04-02",
  "value": 0
}, {
  "date": "2020-04-03",
  "value": 0
}, {
  "date": "2020-04-04",
  "value": 0
}, {
  "date": "2020-04-05",
  "value": 1
}, {
  "date": "2020'-04-06",
  "value": 4
}, {
  "date": "2020'-04-07",
  "value": 5
}, {
  "date": "2020'-04-08",
  "value": 6
}, {
  "date": "2020'-04-09",
  "value": 6
}, {
  "date": "2020'-04-10",
  "value": 7
}, {
  "date": "2020'-04-11",
  "value": 7
}, {
  "date": "2020'-04-12",
  "value": 7
}, {
  "date": "2020'-04-13",
  "value": 8
}, {
  "date": "2020'-04-14",
  "value": 8
}, {
}, {
  "date": "2020'-04-15",
  "value": 9
}, {
}, {
  "date": "2020'-04-16",
  "value": 11
}, {
}, {
  "date": "2020'-04-17",
  "value": 12
}, {
}, {
  "date": "2020'-04-18",
  "value": 12
}, {
}, {
  "date": "2020'-04-19",
  "value": 12
}, {
}, {
  "date": "2020'-04-20",
  "value": 14
}, {
}, {
  "date": "2020'-04-21",
  "value": 16
}, {
}, {
  "date": "2020'-04-22",
  "value": 18
}, {
  
}];

// Set input format for the dates
chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";

// Create axes
var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
var series = chart.series.push(new am4charts.LineSeries());
series.dataFields.valueY = "value";
series.dataFields.dateX = "date";
series.tooltipText = "{value}"
series.strokeWidth = 2;
series.minBulletDistance = 15;

// Drop-shaped tooltips
series.tooltip.background.cornerRadius = 20;
series.tooltip.background.strokeOpacity = 0;
series.tooltip.pointerOrientation = "vertical";
series.tooltip.label.minWidth = 40;
series.tooltip.label.minHeight = 40;
series.tooltip.label.textAlign = "middle";
series.tooltip.label.textValign = "middle";

// Make bullets grow on hover
var bullet = series.bullets.push(new am4charts.CircleBullet());
bullet.circle.strokeWidth = 2;
bullet.circle.radius = 4;
bullet.circle.fill = am4core.color("#fff");

var bullethover = bullet.states.create("hover");
bullethover.properties.scale = 1.3;

// Make a panning cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "panXY";
chart.cursor.xAxis = dateAxis;
chart.cursor.snapToSeries = series;

// Create vertical scrollbar and place it before the value axis
chart.scrollbarY = new am4core.Scrollbar();
chart.scrollbarY.parent = chart.leftAxesContainer;
chart.scrollbarY.toBack();

// Create a horizontal scrollbar with previe and place it underneath the date axis
chart.scrollbarX = new am4charts.XYChartScrollbar();
chart.scrollbarX.series.push(series);
chart.scrollbarX.parent = chart.bottomAxesContainer;

dateAxis.start = 0.79;
dateAxis.keepSelection = true;


}); // end am4core.ready()