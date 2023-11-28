/*
Exercices qui accompagnent le tuto en anglais de Christian Heilmann :
« The essentials of DOM scripting in 10 minutes »,
http://icant.co.uk/articles/domessentials/
=> voir traduction française sur transparents (js-cours-DOM.pdf)
*/

/* 1. Cibler l'élément d'id nav */
document.getElementById('nav');

/* 2. Récupérer tous les li */
document.querySelectorAll('li');

/* 3. Cibler le 4e li */
document.querySelector('li:nth-child(4)');
//document.getElementById('nav').children[3];

/* 4. Compter le nombre de li dans la page */
document.getElementById('nav').children.length;

/* 5. Cibler le premier li pair */
document.querySelector('li:nth-child(odd)');

/* 6. Récupérer tous les li de classe impair */
const impairs = document.querySelectorAll('.impair');

/* a) afficher ce qu'on obtient */
for (const impair of impairs ){
    console.log(impair);
}

/* b) afficher le 2e li de classe impair */
console.log(impairs[1]);

/* c) afficher chacun des li impair */
/* d) compter le nombre de li de classe impair dans la page */

const chaqueLiImpai = document.querySelectorAll('li.impair').length;
console.log(chaqueLiImpai);


/* 7. Cibler le 4e li puis, à partir de là, cibler son frère juste avant lui */



/* 8. Cibler le 4e li puis, à partir de là, cibler le suivant */



/* 9. Cibler le parent du 4e li */



/* 10. Récupérer tous les enfants de l'ul */
const ulENfants = document.querySelectorAll('ul').children;


/* a) afficher ce qu'on obtient */
console.log(ulENfants)


/* b) cibler le 1er enfant de l'ulconst premierChildUl = ulENfants[0];
console.log(premierChildUl) */


/* c) cibler le dernier enfant de l'ul const lastChildUl= ulChildren[ulChildren.length -1];
console.log(lastChildUl)*/


/* c) cibler le 4e enfant de l'ul const quartiemeEnfantUl= ulChildren[3];
console.log(quartiemeEnfantUl)*/



/* 11. Chaînage de méthodes - que retournent les expressions suivantes ? */
/* a) document.getElementById("nav"). getElementsByTagName("li")[3].firstChild */
// le premier enfant du deuxième li dans le nav


/* b) document. getElementsByTagName("li")[2].childNodes[3].firstChild */


/* c) document. getElementsByTagName("li")[2].firstChild.firstChild */



/* 12. Afficher les propriétés (nom du nœud, type de nœud, valeur du nœud) d'un nœud
*/
/* a) du noeud document.getElementById("nav").getElementsByTagName("li")[3].firstChild */
const prprietesNeoud1= document.getElementById("nav").getElementsByTagName("li")[3].firstChild;
console.log(prprietesNeoud1.nodeName, prprietesNeoud1.nodeType, prprietesNeoud1.nodeValue)
/* b) du noeud document.getElementById("nav").getElementsByTagName("a")[2].firstChild */
const prprietesNoeud2= document.getElementById("nav").getElementsByTagName("a")[2].firstChild;
console.log(prprietesNoeud2.nodeName, prprietesNoeud2.nodeType, prprietesNoeud2.nodeValue)

/* 13. Changer le texte "Photos" en "Visuals" */
const photosElement = document.querySelector('a[href="photos.html"]');
photosElement.textContent = 'Visuals';


/* 14. Modifier les attributs d'un élément */
/* a) Changer la valeur de l'attribut href du lien "Photos" en "photos.php" */
const linkPhotos = document.querySelector('a[href="photos.html"]');
linkPhotos.setAttribute('href', 'photos.php')

/* a) Lui ajouter un attribut title avec la valeur "voir mes photos" */
linkPhotos.setAttribute('title', 'voir mes photos');


/* 15. Supprimer le dernier li du menu
       (faites-le en utilisant la méthode querySelector pour cible l'ul
        et querySelectorAll pour cibler les li)
*/

const selected = document.querySelector('ul#nav');
const lastItemLI = selected.querySelectorAll('li')[selected.querySelectorAll('li').length - 1];

selected.removeChild(lastItemLI);



/* 16. Ajouter un li à la fin de la liste */
/*const nouveauLi = document.createElement('li');
nouveauLi.textContent= 'Nouveau li ';
document.getElementById('nav').appendChild(nouveauLi);

 */
const ullElement = document.querySelector('ul');

const neuesLiElement = document.createElement('li');
neuesLiElement.textContent = 'Nouveau li';

ullElement.appendChild(neuesLiElement);



/* 17. Ajouter un lien dans le menu. Ce lien doit
	- venir avant "photos",
	- afficher le texte "Bibliographie",
	- pointer vers la page "biblio.html" et
	- afficher au survol la boîte de dialogue avec le texte "consulter ma bibliographie"  */

const nouveauItem= document.createElement('li');
const nouveauLien = document.createElement('a');
nouveauLien.href= 'biblio.html';
nouveauLien.textContent = 'Bibliographie';
nouveauLien.title = 'consulter ma bibliographie';
nouveauItem.appendChild(nouveauLien)

const avantPhotos = document.querySelector('a[href="photos.php"]');
const parentElement = avantPhotos.parentElement; // Das übergeordnete Element des gefundenen Links

parentElement.insertBefore(nouveauItem, avantPhotos);


/* 18. Modifier le lien "Photos" 
	  - changer son libellé en "Visuals" 
	  - ajouter une boîte de dialogue au survol avec le texte "voir la galerie" 
	  - changer la cible du lien en "visuals.html " */

/*const lienPhotos = document.querySelector('a[href="photos.php"]');
lienPhotos.textContent = 'Visuals';
linkPhotos.setAttribute('href', 'visuals.html');
linkPhotos.setAttribute('title', 'voir la galerie');
 */



/* 19. Dupliquer le li "Photos" et s'en servir pour ajouter un lien
	   - juste après le lien "Photos"
	   - dont le libellé est "Visuals" 
	   - avec une boîte de dialogue au survol qui affiche le texte "voir la galerie" 
	   - qui pointe vers la page "visuals.html " */

const photosLi = document.querySelector('a[href="photos.php"]').parentElement;

const visualsLi = photosLi.cloneNode(true);

const visualsLink = visualsLi.querySelector('a');
visualsLink.textContent = 'Visuals';
visualsLink.title = 'voir la galerie';
visualsLink.href = 'visuals.html';

photosLi.parentNode.insertBefore(visualsLi, photosLi.nextSibling);




/* 20. Remplacer le dernier lien par le texte (non cliquable) "Contact : monmail@gmail.com"*/
const tousLiens = document.querySelectorAll('ul#nav a');

const dernierLien= tousLiens[tousLiens.length - 1];

const newTextElement = document.createTextNode('Contact : monmail@gmail.com');

dernierLien.parentNode.replaceChild(newTextElement, dernierLien);