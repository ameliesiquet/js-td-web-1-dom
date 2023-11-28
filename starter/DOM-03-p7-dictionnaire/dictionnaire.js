// 03-DOM : MODIFIEZ LA STRUCTURE DE LA PAGE
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/

/*
DOM - PREPA 7 : « Dictionnaire » : construire un dictionnaire
1. Votre dictionnaire contient les mots et les définitions suivantes :
    - Procrastination : Tendance pathologique à remettre systématiquement au lendemain
    - Tautologie : Phrase dont la formulation ne peut être que vraie
    - Oxymore : unit dans un même syntagme deux termes sémantiquement opposés
2. Stockez la liste des mots du dictionnaire dans la variable mots,
    qui est un tableau d'objets :
    - chaque élément du tableau représente un mot ;
    - chaque mot est lui-même un objet avec deux propriétés :
        * une propriété "terme", et
        * une propriété "definition"
3. Créer le dictionnaire sur la page web, dans la div d'id "contenu"
AIDE : utilisez la méthode forEach() pour parcourir le tableau de mots
*/



document.addEventListener('DOMContentLoaded', function() {
    const mots = [
        {
            terme: 'Procrastination',
            definition: 'Tendance pathologique à remettre systématiquement au lendemain'
        },
        {
            terme: 'Tautologie',
            definition: 'Phrase dont la formulation ne peut être que vraie'
        },
        {
            terme: 'Oxymore',
            definition: 'Unit dans un même syntagme deux termes sémantiquement opposés'
        }
    ];

    const divContenu = document.getElementById('contenu');
    const ul = document.createElement('ul')

    mots.forEach(function (mot){
        const nouveauLi = document.createElement('li');
        const nouveauTerme = document.createElement('strong');
        nouveauTerme.textContent = mot.terme + ' : ';
        const nouvelleDefinition = document.createElement('span');
        nouvelleDefinition.textContent = mot.definition;

        nouveauLi.appendChild(nouveauTerme);
        nouveauLi.appendChild(nouvelleDefinition);
        ul.appendChild(nouveauLi)
    });
    divContenu.appendChild(ul)
});



