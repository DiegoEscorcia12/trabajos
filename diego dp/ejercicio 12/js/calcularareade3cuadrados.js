function trescuadra(plado1,plado2,plado3){
    let cuad1 = plado1
    let cuad2 = plado2
    let cuad3 = plado3
    
    cuad1 = plado1 * plado1
    cuad2 = plado2 * plado2
    cuad3 = plado3 * plado3
    
    if(cuad1==cuad2 && cuad1==cuad3 ){
        return "Todos los cuadrados son iguales"
    }
    else if(cuad1>cuad2 && cuad1>cuad3){
        return "lado1 es mayor"
    }
    else if(cuad2>cuad3 && cuad2>cuad1){
        return"lado2 es mayor"
    }
    else{
        return "lado3 es mayor"
    }
    
}