function enlargePicture(){
    var imageWidth=document.getElementById("lionPicture").clientWidth;
    document.getElementById("lionPicture").style.width=(imageWidth + 20)+ "px";
}

// on récupère la largeur de l'image ligne2
// on va changer les styles .styles
// on va modifier la largeur .width
// (imageWidth + 20) opération
// + "px" l'opération sera en px
// clientWidth = largeur de l'image