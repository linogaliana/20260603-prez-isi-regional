/*Positionnement du champ de saisie de la réunion*/

var el1 = document.querySelector('#title-slide');

el1.insertAdjacentHTML('beforeend', ' <div id=\'nomReunion\' w3-include-html="modulesCompl/customPremierePage.html"></div> ');

includeHTML();

/*Gestion de l'apparition du footer et du nom de la réunion*/

  var $footerPerso = document.getElementById('footerPersonnalise');
  var $pageDebut = document.getElementById('title-slide');
  var $pageFin = document.getElementById('pageDeFin');
  var $nomReunion = document.getElementById('nomReunion');
  var $logoParDefault = document.getElementsByClassName("slide-logo");

  Reveal.on( 'slidechanged', event => {
      
    /*gestion footer*/

    if (!$footerPerso.classList.contains("divCachee")) {
      $footerPerso.classList.add("divCachee");
    } 
    
    if ($pageDebut.classList.contains("present")
        || $pageFin.classList.contains("present")) {
      $footerPerso.classList.remove("divCachee");
    }
    
    /*gestion nomReunion*/
    
    if (!$nomReunion.classList.contains("divCachee")) {
      $nomReunion.classList.add("divCachee");
    } 
    
    if ($pageDebut.classList.contains("present")) {
      $nomReunion.classList.remove("divCachee");
    }
    
    /*gestion logo*/
    
    if (!$logoParDefault[0].classList.contains("divCachee")) {
      $logoParDefault[0].classList.add("divCachee");
    }
    
    if ($pageDebut.classList.contains("present")
        || $pageFin.classList.contains("present")) {
      $logoParDefault[0].classList.remove("divCachee");
    }
    
  });