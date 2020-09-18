function comparaStrings(primeiraString, segundaString) {
    var resultado;
    if (primeiraString.length<segundaString){
        resultado=primeiraString+segundaString;
    }   else{
        resultado=segundaString+primeiraString;
    }
    return resultado;
}