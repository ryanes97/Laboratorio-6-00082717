function sumas(arreglo){
    let cantidad = arreglo.length;
    if(cantidad % 2 == 0){
        for(let i = 0; i<=cantidad/2-1; i++){
            console.log(arreglo[i]+arreglo[cantidad-i-1]);
        }
    }
    else{
        for(let i = 0; i<Math.floor(cantidad/2); i++){
            console.log(arreglo[i] + arreglo[cantidad -(1+i)]);
        }
        console.log(arreglo[Math.floor(cantidad/2)])
    }
    return;
}