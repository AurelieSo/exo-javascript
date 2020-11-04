function sendData() {
    var shoeSize= document.getElementById('shoeSize').value;
    var birthDate= document.getElementById('birthDate').value;
    var resultat= (((((shoeSize *2) +5 ) *50 ) -birthDate) +1769);
    alert('Le résultat de ce calcul est : '+ resultat );
}

    //sendData est le nom da la fonction, on peut lui donner le nom que l'on veut