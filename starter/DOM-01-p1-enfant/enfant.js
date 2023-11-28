// 01-DOM : DÉCOUVREZ LE DOM
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/

/*
 DOM - PREPA 1 : afficher l'enfant d'un objet du DOM
Déclarez la fonction afficherEnfant afin que le reste du programme fonctionne correctement.
AIDES : 
	La fonction afficherEnfant affiche un enfant d'un objet du DOM
	Le paramètre noeud est l'objet du DOM
	Le paramètre indice est l'indice de l'enfant à afficher
*/

// Insérez votre code ici

//????

function afficherEnfant(noeud, indice) {
    if (!noeud || noeud.nodeType !== 1) {
        return "Type de noeud incorrect" ;
    }

    if (indice < 0 || indice >= noeud.children.length) {
        return "Indice incorrect";
    }

    const enfant = noeud.children[indice];
    return  enfant
}

document.addEventListener('DOMContentLoaded', function() {

});

// Doit afficher le noeud h1
afficherEnfant(document.body, 0); // Index von 0, da die Indizierung bei 0 beginnt

// Doit afficher l'erreur "Indice incorrect"
// L'indice demandé est négatif
afficherEnfant(document.body, -1);

// Doit afficher l'erreur "Indice incorrect"
// Le noeud body à moins de 9 noeuds enfants
afficherEnfant(document.body, 8);

// Doit afficher l'erreur "Type de noeud incorrect"
// Le premier noeud enfant de body est textuel et n'a donc pas d'enfants
afficherEnfant(document.body.childNodes[0], 0);