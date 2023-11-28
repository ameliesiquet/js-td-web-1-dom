// 04-DOM : DONNEZ DU STYLE À VOS ÉLÉMENTS
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/

/*
DOM - PREPA 9 : « Infos » : informations sur un élément
Récupérez la largeur et la hauteur de la section d'id "contenu"
et affichez les deux informations dans une liste
(un item pour la largeur et un item pour la hauteur)
que vous insérez dans la section d'id "infos" après le titre
*/


document.addEventListener('DOMContentLoaded', function() {
    const IDcontenu = document.getElementById('contenu');

    const largeur = IDcontenu.width;
    const hauteur = IDcontenu.height;

    const nouveauUl= document.createElement('ul');
    const nouveauLi= document.createElement('li');
    nouveauLi.textContent= largeur+hauteur;

    const sectionInfos = document.getElementById('infos');

    sectionInfos.querySelector('h2').insertAdjacentElement('afterend', nouveauUl);

});





