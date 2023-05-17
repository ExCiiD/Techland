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
  