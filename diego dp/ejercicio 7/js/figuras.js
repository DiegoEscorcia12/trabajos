function area(operador,plado,pbase,paltura){
    let areas
    if (operador = "cuadrado"){
        areas = plado * plado
    }
    else if(operador ="rectangulo"){
        areas = pbase * paltura
    }
    else if(operador ="triangulo"){
        areas = (pbase * paltura) / 2
    }
    else {
        areas = Error
    }
    return areas 
}
