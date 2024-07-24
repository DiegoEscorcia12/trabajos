const resta = function (puno,pdos){
    let restar
    let uno = puno
    let dos = pdos
    restar = uno - dos
    return restar

    
}
const multiplicador = function (puno,pdos){
    let multi
    let uno = puno
    let dos = pdos
    multi = uno * dos
    return multi

    
}
const division = function (puno,pdos){
    let dividor 
    let uno = puno
    let dos = pdos
    dividor = uno / dos
    return dividor

    
}
const operacion = function (poperador,puno,pdos){
    let operador =poperador
    let uno = puno
    let dos =  pdos

    if(operador =="resta") {
        result = resta(puno,pdos)
    } 
    else if (operador =="multiplicar") {
        result = multiplicador(puno,pdos)

    }
    else if (operador =="division") {
        result = division(puno,pdos)

    } 
    else {
        result ="Error"
    }
    
    return result
 

    
}


