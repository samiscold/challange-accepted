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