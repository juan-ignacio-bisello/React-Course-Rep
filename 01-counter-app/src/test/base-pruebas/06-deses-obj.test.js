import { usContext } from '../../base-pruebas/06-deses-obj'


describe('Prueba en06-deses-obj', () => {
    test('usContext debe retornar un objeto', () => { 

        const clave = 123;
        const nombre = 'ignacio';
        const edad = 24;
        const rango = 'Capitán'

        const testUser = {
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }

        const user = usContext(clave, nombre, edad, rango)
        console.log(user)
    })
})