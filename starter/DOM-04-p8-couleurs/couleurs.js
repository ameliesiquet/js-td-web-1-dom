// 04-DOM : DONNEZ DU STYLE À VOS ÉLÉMENTS
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/

/*
DOM - PREPA 8 : « Couleurs » :
1. Demandez à l'utilisateur de choisir la couleur de texte et la couleur de fond qu'il souhaite appliquer aux titres
   (indiquez-lui qu'il doit vous fournir la couleur souhaitée sous son nom anglais ou bien en utilisant le format hexadécimal ou RGB).
   Le message pourrait être celui-ci : 'Entrez la couleur de texte que vous souhaitez appliquer aux titres
   (utilisez soit le nom anglais de la couleur, soit le format hexadécimal, soit le format RGB) :' ;
2. Utilisez ces couleurs pour satisfaire les préférences de votre utilisateur
*/






document.addEventListener('DOMContentLoaded', function() {
    const choisirCouleurTexte = prompt('Entrez la couleur de texte que vous souhaitez appliquer aux titre (utilisez soit le nom anglais de la couleur, soit le format hexadécimal, soit le format RGB) :');

    const chosirCouleurFond =  prompt('Entrez la couleur de Fond que vous souhaitez appliquer aux titre (utilisez soit le nom anglais de la couleur, soit le format hexadécimal, soit le format RGB) :');

    const titres = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

    titres.forEach(function(title) {
        title.style.color = choisirCouleurTexte;
        title.style.backgroundColor = chosirCouleurFond;
    });
});
