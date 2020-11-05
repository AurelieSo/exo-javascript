function enlargePicture(zoomType){
    var imageWidth=document.getElementById("lionPicture").clientWidth;
    if (zoomType == 'plus'){
    document.getElementById("lionPicture").style.width=(imageWidth + 20)+ "px";    
    }
   if (zoomType == 'moins') {
    document.getElementById("lionPicture").style.width=(imageWidth - 20)+ "px"; 
   }
}

// on récupère la largeur de l'image ligne2
// on va changer les styles .style
// on va modifier la largeur .width
// (imageWidth + 20) opération
// + "px" l'opération sera en px
// clientWidth = largeur de l'image
// la fonction zoom va recevoir un paramètre (zoomType)
// on a spécifié dans le html ce qui est 'plus' ou 'moins'
// on aurait pu mettre else au lieu du 2e if
// == comparer une valeur, un seul égal donner une valeur