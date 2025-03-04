import { setPokemons, startLoadingPokemons } from './pokemonSlice';


export const getPokemons = ( page = 0 ) => {
    
    return ( dispach, getState ) => {
        
        dispach( startLoadingPokemons() );
    
        // TODO: realizar peticion http

        // dispach( setPokemons() );
    }

}