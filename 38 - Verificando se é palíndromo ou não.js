function ehPalindromo(palavra){

    var verify[];
    for (var i=0;i<palavra.length/2;i++){
        if (palavra[i]===palavra[(palavra.length)-i-1]) {
            verify.push(true);
        } else{
            verify.push(false);}
        }
    }

    var produtoA=1;
    for (var j=0;j<verify.length;j++){
        var produtoA=produtoA.verify[j];}
    
        var check=produtoA;
            if(check===0){
                return "INFELIZMENTE, NÃO SOU UM PALÍNDROMO";} else if {(check===1) return "SIM, SOU UM PALÍNDROMO";}
             
            }
    
    
}