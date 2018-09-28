function cuantos(numero, arreglo) {   
    let contador = 0;

    arreglo.forEach(element => {
        if(element==numero){
            contador+=1;
        }
    });

    return contador;
}

