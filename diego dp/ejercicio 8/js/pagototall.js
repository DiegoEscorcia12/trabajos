function pagototal(valordia,diastrabajados){
    let sueldo = diastrabajados * valordia
    let salud = sueldo * 0.12
    let pension = sueldo * 0.12
    let arl = sueldo * 0.052
    let descuento = salud + pension +arl
    let pagototal = sueldo - descuento

    return sueldo +"sueldo"+ salud +"salud"+ pension +"pension"+ arl+"arl"+descuento +"descuento" * pagototal +"pagototal"
    
}