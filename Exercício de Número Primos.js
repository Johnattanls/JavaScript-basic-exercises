/* Escreva um código que encontre todos os números primos entre 0 e n e coloque-os num array chamado 'numerosPrimos' */

function buscaNumeroPrimos(n){

var numerosPrimos=[];
    for (var i=2;i<n;i++){
        var verify[];
        for (var j=1;j<=i;j++){
            var a=i%j;
            if (a===0){verify.push(i);}
            
        }
        if (verify.length===2){numerosPrimos.push(i);}
    }



    return numerosPrimos;
}