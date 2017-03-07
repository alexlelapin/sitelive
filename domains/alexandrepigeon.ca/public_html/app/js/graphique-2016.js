/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
    $.getJSON("http://alexandrepigeon.ca/app/php/graphique-2016.php", function (result) {

        var chart = new CanvasJS.Chart("chartContainer2016", {
            animationEnabled: true,
            animationDuration: 3000,
            toolTip: {
                backgroundColor: "rgba(0,0,0,0.6)",
                fontColor: "white",
                borderColor: "white",
                shared: true,
                width: 1000,
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
                maximum: 800,
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
                    dataPoints: result
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
                        {label: "#2", y: 36, indexLabel: "36 L"},
                        {label: "#3", y: 72},
                        {label: "#4", y: 118, indexLabel: "118 L"},
                        {label: "#5", y: 164},
                        {label: "#6", y: 210, indexLabel: "210 L"},
                        {label: "#7", y: 256},
                        {label: "#8", y: 278, indexLabel: "278 L"},
                        {label: "#9", y: 299},
                        {label: "#10", y: 320, indexLabel: "320 L"},
                        {label: "#11", y: 343},
                        {label: "#12", y: 364, indexLabel: "364 L"},
                        {label: "#13", y: 384},
                        {label: "#14", y: 406, indexLabel: "406 L"},
                        {label: "#15", y: 429},
                        {label: "#16", y: 449, indexLabel: "449 L"},
                        {label: "#17", y: 470},
                        {label: "#18", y: 493, indexLabel: "493 L"},
                        {label: "#19", y: 513},
                        {label: "#20", y: 536, indexLabel: "536 L"},
                        {label: "#21", y: 560},
                        {label: "#22", y: 583, indexLabel: "583 L"},
                        {label: "#23", y: 603},
                        {label: "#24", y: 624, indexLabel: "624 L"},
                        {label: "#25", y: 649},
                        {label: "#26", y: 670, indexLabel: "670 L"},
                        {label: "#27", y: 688},
                        {label: "#28", y: 706, indexLabel: "706 L"}


                    ]
                }]
        });

        chart.render();
    });
});