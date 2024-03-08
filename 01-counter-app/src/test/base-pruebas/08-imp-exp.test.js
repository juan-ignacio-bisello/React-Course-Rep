import { getHeroeById, getHeroesByOwner } from '../../base-pruebas/08-imp-exp'

describe('Puebas en 08-imp-exp', ( ) => {

    test('getHeroeById debe retornar un heroe por ID', () => { 
        
        const id = 1;
        const hero = getHeroeById( id );
        
        expect( hero ).toEqual({ id:1, name: 'Batman', owner: 'DC'});
     });

     test('getHeroeById debe retornar undefine si no existe', () => { 
        
        const id = 100;
        const hero = getHeroeById( id );
        //hay que tener cuidado porque tambien lo toma al false como error
        expect( hero ).toBeFalsy();
     });

     test('GetHeroesByOwner', () => { 
        
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 3 );
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) );

      });
})