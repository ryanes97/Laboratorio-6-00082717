function tipo (arreglo, typo){
    listTipo = [];
    arreglo.forEach(element => {
        if(typeof element == typo){
            listTipo.push(element);
        }
    });
    return listTipo;
}