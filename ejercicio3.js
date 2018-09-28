function tipoDeDato(arreglo) {   
    numerico = 0;
    booleano = 0;
    cadena = 0;
    objeto = 0;
    funcion = 0;
    indefinido = 0;
    simbolo = 0;

    arreglo.forEach(element => {
        if(typeof element == 'boolean'){
            booleano+=1;
        }

        if(typeof element == 'string'){
            cadena+=1;
        }

        if(typeof element == 'number'){
            numerico+=1;
        }

        if(typeof element == 'function'){
            funcion+=1;
        }

        if(typeof element == 'object'){
            objeto+=1;
        }

        if(typeof element == 'symbol'){
            simbolo+=1;
        }

        if(typeof element == 'undefined'){
            indefinido+=1;
        }
    });
    console.log("Booleanos: " + booleano);
    console.log("Strings: " + cadena);
    console.log("Numbers: " + numerico);
    console.log("Functions: " + funcion);
    console.log("Objects: " + objeto);
    console.log("Symbols: " + simbolo);
    console.log("Undefineds: " + indefinido);


    return;
}
