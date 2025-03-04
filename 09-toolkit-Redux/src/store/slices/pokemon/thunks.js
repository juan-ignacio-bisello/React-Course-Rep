import { pokemonApi } from '../../../api/pokemonApi';
import { setPokemons, startLoadingPokemons } from './pokemonSlice';


export const getPokemons = ( page = 0 ) => {
    
    return async( dispach, getState ) => {

        dispach( startLoadingPokemons() );
    
        // TODO: realizar peticion http
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`);
        // const data = await resp.json();

        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`)

        dispach( setPokemons({ pokemon: data.results, page: page + 1 }) );
    }

}