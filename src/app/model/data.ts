
export interface PokemonResponse{
    count: number,
    next: null;
    previous: null;
    resutls: []
}

export interface Pokemons{
    id:number,
    name: string,
    url: string,
    status: boolean,
    alias: string,
    pic:string,
    types: any,
    habilities: any
}