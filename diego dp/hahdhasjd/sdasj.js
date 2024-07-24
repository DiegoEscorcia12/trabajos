

for (contar1; contar1 <= 5; contar1++) {
    for (let contar2 = 1; contar2 <= 5; contar2++) {

        let resultado = contar1 * contar2;

        console.log(contar1+"X"+contar2+"="+resultado);

        if (resultado%2==0) {
            console.log("Buzz");
            par++
        } 
       else{
            console.log("Bass");
            impar++
        }
    }      
}
console.log("cantidad de pares "+par);
console.log("cantidad de impares "+impar);
return "Finalizacion"
}












































 