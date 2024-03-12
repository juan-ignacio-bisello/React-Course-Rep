import { getImagen } from '../../base-pruebas/11-async-await'

describe('Puebas en 11-async', () => {

    test('getHeroeByIdAsync debe retornar un heroe', async() => {

        const url = await getImagen();
        console.log( url );
        expect( typeof url ).toBe('string')

    }
    )
})
