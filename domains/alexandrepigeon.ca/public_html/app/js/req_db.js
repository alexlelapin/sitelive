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
   
});


