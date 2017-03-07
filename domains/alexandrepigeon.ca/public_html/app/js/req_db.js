/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {

    $('.collapse-classes').click(function () {

        var x = document.getElementById('chartContainer2016');

        if (x.style.visibility === 'hidden') {
            $.getScript("app/js/graphique-2016.js");
            x.style.display = 'block';
            x.style.visibility = 'visible';
            x.style.height = '450px';

        } else {
            x.style.visibility = 'hidden';
            x.style.height = '0px';
            x.style.display = 'none';
        }

        var $this = $(this);

        $this.toggleClass('Afficher');


        if ($this.hasClass('Afficher')) {
            $this.text('Masquer');
        } else {
            $this.text('Afficher');
        }

    });
    $.getJSON("http://alexandrepigeon.ca/app/php/tableau-bd.php", function (result) {
        var $table = $('#table_db');
        $table.bootstrapTable({
            data: result,
            search: true,
            pagination: true,
            buttonsClass: 'primary myFuckingColor',
            showFooter: false,
            minimumCountColumns: 2,
            sortName: 'Date de fabrication',
            sortOrder: 'desc',
            striped: 'true',
            pageSize: 5,
            pageList: [5, 10, 25, 50],
            columns: [
                {field: 'idBrassin', title: 'idBrassin', sortable: false},
                {field: 'Nom', title: 'Nom', sortable: true},
                {field: 'Style', title: 'Style', sortable: true},
                {field: 'Date de fabrication', title: 'Date de fabrication', sortable: true},
                {field: 'Age (jours)', title: 'Age (jours)', sortable: true},
                {field: 'ABV', title: 'ABV', sortable: true},
                {field: 'IBU', title: 'IBU', sortable: true},
                {field: 'Levures', title: 'Levures', sortable: true},
                {field: 'Houblons', title: 'Houblons', sortable: true},
                {field: 'SRM', title: 'SRM', sortable: true},
                {field: 'Efficacite', title: 'Efficacite', sortable: true},
                {field: 'Quantite levure', title: 'Quantite levure', sortable: true},
                {field: 'Pitch rate', title: 'Pitch rate', sortable: true},
                {field: 'Age levure', title: 'Age levure', sortable: true},
                {field: 'Yeast starter', title: 'Yeast starter', sortable: true},
                {field: 'T° pitch', title: 'T° pitch', sortable: true},
                {field: 'T° fermentation', title: 'T° fermentation', sortable: true},
                {field: 'OG', title: 'OG', sortable: true},
                {field: 'FG', title: 'FG', sortable: true},
                {field: 'Volume initial', title: 'Volume initial', sortable: true},
                {field: 'Volume embouteillé', title: 'Volume embouteillé', sortable: true},
                {field: 'Date du transfert', title: 'Date du transfert', sortable: true},
                {field: 'Durée fermentation primaire', title: 'Durée fermentation primaire', sortable: true},
                {field: 'Date embouteillage', title: 'Date embouteillage', sortable: true},
                {field: 'durée fermentation secondaire', title: 'durée fermentation secondaire', sortable: true},
                {field: 'Commentaires fermentation', title: 'Commentaires fermentation', sortable: true},
                {field: 'Cold crash', title: 'Cold crash', sortable: true},
                {field: 'Eau utilisée', title: 'Eau utilisée', sortable: true},
                {field: 'Addtifs eau', title: 'Addtifs eau', sortable: true},
                {field: 'T° chaudron', title: 'T° chaudron', sortable: true},
                {field: 'T° grains', title: 'T° grains', sortable: true},
                {field: 'Quantité grain', title: 'Quantité grain', sortable: true},
                {field: 'T° empêtage début', title: 'T° empêtage début', sortable: true},
                {field: 'T° empâtage fin', title: 'T° empâtage fin', sortable: true},
                {field: 'pH 10 mins', title: 'pH 10 mins', sortable: true},
                {field: 'pH 60 mins', title: 'pH 60 mins', sortable: true},
                {field: 'Quantité d\'eau empatage', title: 'Quantité d\'eau empatage', sortable: true},
                {field: 'Ratio eau/grains', title: 'Ratio eau/grains', sortable: true},
                {field: 'Quantité d\'eau Mash out', title: 'Quantité d\'eau Mash out', sortable: true},
                {field: 'T° mash out', title: 'T° mash out', sortable: true},
                {field: 'Commentaires empâtage', title: 'Commentaires empâtage', sortable: true},
                {field: 'Quantité recirculée', title: 'Quantité recirculée', sortable: true},
                {field: 'Quantité d\'eau sparge', title: 'Quantité d\'eau sparge', sortable: true},
                {field: 'Température sparge', title: 'Température sparge', sortable: true},
                {field: 'Commentaires sparge', title: 'Commentaires sparge', sortable: true},
                {field: 'Volume pre-boil', title: 'Volume pre-boil', sortable: true},
                {field: 'OG pre-boil', title: 'OG pre-boil', sortable: true},
                {field: 'Position du couvercle', title: 'Position du couvercle', sortable: true},
                {field: 'Volume final', title: 'Volume final', sortable: true},
                {field: 'Quantité d\'eau évaporée', title: 'Quantité d\'eau évaporée', sortable: true},
                {field: 'Commentaire boil', title: 'Commentaire boil', sortable: true},
                {field: 'Commentaires généraux', title: 'Commentaires généraux', sortable: true},
                {field: 'Personnes présentes', title: 'Personnes présentes', sortable: true},
                {field: 'Heure début', title: 'Heure début', sortable: true},
                {field: 'Heure fin', title: 'Heure fin', sortable: true},
                {field: 'Temps', title: 'Temps', sortable: true}]
        });
    });

    $.getJSON("http://alexandrepigeon.ca/app/php/graphique-2017.php", function (result) {
        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            animationDuration: 3000,
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
                maximum: 1500,
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
                        {"label": "#29", "y": 19},
                        {"label": "#30", "y": 38, "indexLabel": "38 L"},
                        {"label": "#31", "y": 57},
                        {"label": "#32", "y": 67, "indexLabel": "67 L"},
                        {"label": "#33", "y": 90},
                        {"label": "#34", "y": 100, "indexLabel": "100 L"},
                        {"label": "#35", "y": 119},
                        {"label": "#36", "y": 139, "indexLabel": "139 L"},
                        {"label": "#37", "y": 186},
                        {"label": "#38", "y": 209, "indexLabel": "209 L"}]
                }
            ]

        });

        chart.render();
    });


});