function openFormulaire1() {
    document.querySelector ('.formulaire_choix_1').classList.add('open');
    document.querySelector ('.formulaire_choix_2').classList.add('open');
}
    function openFormulaire2() {
    document.querySelector ('.formulaire_choix_2').classList.remove('open');
    document.querySelector ('.formulaire_choix_3').classList.add('open2');
    
}

// imagesLoaded.js, Hammer.js, and Sequence.js loaded as external assets

$('input').on('change', function() {
    $('body').toggleClass('blue');
  });


  function openSectionPortable() {
    document.getElementById ('sectionPortable').classList.remove('letsgo1');
    document.getElementById ('sectionPeripherique').classList.remove('letsgo1');
    document.getElementById ('sectionTourPC').classList.remove('letsgo2');
    document.getElementById ('sectionEcranPC').classList.remove('letsgo3');   
}

function openSectionPeripherique() {
    document.getElementById ('sectionPortable').classList.add('letsgo1');
    document.getElementById ('sectionPeripherique').classList.add('letsgo1');
    document.getElementById ('sectionTourPC').classList.remove('letsgo2');
    document.getElementById ('sectionEcranPC').classList.remove('letsgo3'); 
}

function openSectionTourPC() {
    document.getElementById ('sectionPortable').classList.add('letsgo1');
    document.getElementById ('sectionPeripherique').classList.remove('letsgo1');
    document.getElementById ('sectionTourPC').classList.add('letsgo2');
    document.getElementById ('sectionEcranPC').classList.remove('letsgo3');  
}

function openSectionEcranPc() {
    document.getElementById ('sectionPortable').classList.add('letsgo1');
    document.getElementById ('sectionPeripherique').classList.remove('letsgo1');
    document.getElementById ('sectionTourPC').classList.remove('letsgo2');
    document.getElementById ('sectionEcranPC').classList.add('letsgo3'); 
}



function openMenuBurger() {
    document.querySelector ('.container_nav_burger').classList.add('active');
    document.querySelector ('.nav_close').classList.add('active');
}
    function closeMenuBurger() {
    document.querySelector ('.container_nav_burger').classList.remove('active'); 
    document.querySelector ('.nav_close').classList.remove('active');
    
}


function openBarreRecherche() {
    document.querySelector ('.searchbar').classList.add('searchopen'); 
}

function closeBarreRecherche() {
    document.querySelector ('.searchbar').classList.remove('searchopen'); 
}