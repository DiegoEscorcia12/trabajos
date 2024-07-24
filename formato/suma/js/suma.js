

function suma(){
    let numeroUno = parseInt(document.getElementById('txtNumeroUno').value);
    let numeroDos = parseInt(document.getElementById('txtNumeroDos').value);

    let sumar;
    let imagenCuadrado = "<img src='img/cuadrado1.jpg'>";
    sumar = numeroUno + numeroDos;
    
    document.getElementById('suma').innerHTML = "<strong>"+sumar+"</strong>"+imagenCuadrado;

    return false
}