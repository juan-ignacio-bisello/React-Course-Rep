

export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

const nombre = 'Ignacio'
console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );