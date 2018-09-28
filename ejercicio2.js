function promedio(arreglo) {   
    let suma = 0;
    let contador = 0;

    arreglo.forEach(element => {
        suma = suma+element;
        contador+=1;
    });
    console.log("suma: " + suma);
    console.log("promedio: " + suma/contador);
    return;
}
