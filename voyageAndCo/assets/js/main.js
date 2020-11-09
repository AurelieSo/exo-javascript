// Pour cet exercice, réutiliser le fichier HTML de Voyage & Co.
// Au chargement de la page, les 3 blocs ne doivent pas apparaitre. Les faire apparaitre au scroll de la page.

//Pour masquer la div :
// document.getElementById("test").style.display = none;
///Pour afficher la div :
// document.getElementById("test").style.display = block;


// D'abord on fait disparaitre les blocs (on cible les blocs puis on les fait disparaitre)

// on cible les blocs pour pouvoir les utiliser ensuite
var appearFirst=document.getElementById('appearFirst');
var appearSecond=document.getElementById('appearSecond');
var appearThird=document.getElementById('appearThird');

// au lieu d'utiliser un display none on va utiliser opacity car en display none : les blocs plus bas vont remonter ainsi les autres éléments ne vont pas bouger


// altgr+ 5 du haut pour faire les []
// on assemble les éléments
var appearTable=[appearFirst, appearSecond, appearThird];
// on assemble pour la disparition

var disappearTable=[appearThird, appearSecond, appearFirst];
// on va créer une boucle
// forEach pour chaque élément contenu dans le tableau appearTable on va éxécuter le code entre les accolades
// on peut donner le nom que l'on veut ici element 
appearTable.forEach(element => {
    element.style.opacity=0;
});


// window = fenêtre du navigateur
// on va surveiller l'élément scroll de la fenêtre quand on va scroll tu vas faire l'action
// on cherche la position verticale dont scrollY si horizontale scrollX
// console : lorsque l'on est sur le site web ctrl+maj+i, ça lance l'inspecteur, on peut choisir console, la position du scroll s'affiche dans la console, on voit alors la valeur que l'on veut voir

window.addEventListener('scroll',function(){
    var scrollValue=window.scrollY;
    console.log(scrollValue);

    if (scrollValue>500) {
        appearTable.forEach(element => {
            element.style.opacity=1;
        });

        // on va créer un décalage à chaque élément en mettant un style à la transition
        // le premier chiffre c'est le temps de la transition et le deuxième c'est le délai avant le départ de l'effet
// effet d'apparition
        appearFirst.style.transition='opacity 1s';
        appearSecond.style.transition='opacity 1s 0.5s';
        appearThird.style.transition='opacity 2s 1s';
    }
    else {
         disappearTable.forEach(element => {
            element.style.opacity=0;
        });

// effet de disparition on inverse l'ordre d'affichage
        appearThird.style.transition='opacity 1s';
        appearSecond.style.transition='opacity 1s 0.5s';
        appearFirst.style.transition='opacity 2s 1s';
    }
})

