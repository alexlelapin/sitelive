/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
 var chart = new CanvasJS.Chart("chartContainer2017", {
            animationEnabled: true,
            animationDuration: 1000,
            toolTip: {
                backgroundColor: "rgba(0,0,0,0.6)",
                fontColor: "white",
                borderColor: "white",
                shared: true,
                content: "{name}: {y} L"
            },
            legend: {
                fontColor: "red"
            },
            backgroundColor: "rgba(0,0,0,0.5)",
            title: {
                fontColor: "white"
            },
            dataPointWidth: 15,
            axisX: {
                titleFontColor: "white",
                labelFontColor: "white",
                margin: 10,
                gridThickness: 1,
                includeZero: true,
                gridColor: "rgba(255,255,255,0.2)",
                interval: 2
            },
            axisY: {
                gridThickness: 1,
                gridColor: "rgba(255,255,255,0.2)",
                margin: 20,
                titleFontColor: "white",
                labelFontColor: "white",
                maximum: 75,
                suffix: " L"
            },
            axisY2: {
                title: "Volume cumulatif",
                titleFontColor: "red",
                labelFontColor: "red",
                maximum: 700,
                suffix: " L"
            },
            axisX2: {

            },
            data: [{
                    indexLabelOrientation: "vertical",
                    indexLabelPlacement: "outside",
                    showInLegend: false,
                    color: "rgba(255,255,255,0.2)",
                    type: "column",
                    indexLabelFontColor: "white",
                    indexLabelFontWeight: "bold",

                    name: "Volume du brassin",
                    dataPoints: [
                        {label: "#29", y:19},
                        {label: "#30", y:19},
                        {label: "#31", y:19},
                        {label: "#32", y:10},
                        {label: "#33", y:23},
                        {label: "#34", y:10},
                        {label: "#35", y:19},
                        {label: "#36", y:20},
                        {label: "#37", y:47},
                        {label: "#38", y:23},
                        {label: "#39", y:31},
                        {label: "#40", y:22},
                        {label: "#41", y:48},
                        {label: "#42", y:9},
                        {label: "#43", y:21},
                        {label: "#44", y:21},
                        {label: "#45", y:43},
                        {label: "#46", y:50},
                        {label: "#47", y:22},
                        {label: "#48", y:25},                        
                        {label: "#49", y:40}                        
                    ]
                }, {
                    type: "area",
                    axisXType: "secondary",
                    axisYType: "secondary",
                    name: "Volume cumulatif",
                    indexLabelWrap: false,
                    indexLabelFontColor: "red",
                    indexLabelFontWeight: "bold",

                    color: "rgba(163, 13, 13,0.4)",
                    dataPoints: [
                        {"label": "#29", "y": 19},
                        {"label": "#30", "y": 38, "indexLabel": "38 L"},
                        {"label": "#31", "y": 57},
                        {"label": "#32", "y": 67, "indexLabel": "67 L"},
                        {"label": "#33", "y": 90},
                        {"label": "#34", "y": 100, "indexLabel": "100 L"},
                        {"label": "#35", "y": 119},
                        {"label": "#36", "y": 139, "indexLabel": "139 L"},
                        {"label": "#37", "y": 186},
                        {"label": "#38", "y": 209, "indexLabel": "209 L"},
                        {"label": "#39", "y": 240},
                        {"label": "#40", "y": 262, "indexLabel": "262 L"},
                        {"label": "#41", "y": 310},
                        {"label": "#42", "y": 319, "indexLabel": "319 L"},
                        {"label": "#43", "y": 340},
                        {"label": "#44", "y": 361, "indexLabel": "361 L"},
                        {"label": "#45", "y": 404},
                        {"label": "#46", "y": 454, "indexLabel": "454 L"},
                        {"label": "#47", "y": 476},                        
                        {"label": "#48", "y": 501},
                        {"label": "#49", "y": 541, "indexLabel": "541 L"}                        
                        
                    ]
                }
            ]

        });

        chart.render();
  
});