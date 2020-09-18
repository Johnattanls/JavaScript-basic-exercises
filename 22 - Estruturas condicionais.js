'use strict';
function determinarGeracao(anoDeNascimento) {

    var resultado;
    if (anoDeNascimento<=1945){
        resultado="Geração silenciosa";
    }   else if (anoDeNascimento>=1945&&anoDeNascimento<=1964){
        resultado="Boomers";
    }   else if (anoDeNascimento>=1964&&anoDeNascimento<=1980){
        resultado="Geracao X";
    }   else if (anoDeNascimento>=1980&&anoDeNascimento<=1996){
        resultado="Millennials";
    }   else {resultado="Geração Z";}

    return resultado;
}