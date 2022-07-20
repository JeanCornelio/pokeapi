import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

import { Observable, of } from 'rxjs';
import { PokemonResponse, Pokemons } from '../model/data';
@Injectable({
  providedIn: 'root'
})
export class DataSourceService {
  favorito:Pokemons[]=[];
  constructor(private http: HttpClient) { }
  url:string = "https://pokeapi.co/api/v2"
  
  getData(){    
    return this.http.get<PokemonResponse>(`${this.url}/pokemon?limit=100000&offset=0`);
  } 

  getDataCard(id:number){
    return this.http.get<Pokemons>(`${this.url}/pokemon/${id}`);
  }

  setLocalStorage(pokemon:any){
    if(localStorage.getItem("pokeFavList") !==null){
      this.favorito = JSON.parse(localStorage.getItem("pokeFavList")||"{}");
    }
     this.favorito.push(pokemon)
    let pokemonArrayJSON = JSON.stringify((this.favorito));
    localStorage.setItem("pokeFavList", pokemonArrayJSON);
    
    
  }

  getPokemonListFav(): Observable<any[]>{
    let pokemonFavList = JSON.parse(localStorage.getItem('pokeFavList') || '{}');
    return  of(pokemonFavList)
  }

  deletePokemonListFav(id:number){
    //Obtengo todos los elementos de la localeStorage (Desconvierto de Sting a JSON)
    let pokemonFavList = JSON.parse(localStorage.getItem('pokeFavList') || '{}');
    /* let pokemonListFavFilter = obj.filter((el:any) => el.id !== id) */
    //Busco en el indice del array el elemento que coincida con el id que quiero eliminar
    let pokemonIndexInArray = pokemonFavList.findIndex((el:any) => el.id === id )
    //elimino el elemento con el metodo slice
      pokemonFavList.splice(pokemonIndexInArray, 1)
    //Convierto de JSON a STRING
      let pokemonArrayJSON = JSON.stringify((pokemonFavList));
    //Envio los tados a la localeStorage
      localStorage.setItem("pokeFavList", pokemonArrayJSON); 
  }

  editPokemonListFav(pokemon:any){
    //Obtengo todos los elementos de la localeStorage (Desconvierto de Sting a JSON)
    let pokemonFavList = JSON.parse(localStorage.getItem('pokeFavList') || '{}'); 
    //Busco en el indice del array el elemento que coincida con el id que quiero eliminar
    let pokemonIndexInArray = pokemonFavList.findIndex((el:any) => el.id === pokemon.id)
    //Remplazo ese elemento modificado por el que esta en el array principal
    pokemonFavList[pokemonIndexInArray] = pokemon
    //Convierto de JSON a STRING
    let pokemonArrayJSON = JSON.stringify((pokemonFavList));
    //Envio los tados a la localeStorage
    localStorage.setItem("pokeFavList", pokemonArrayJSON); 
  }

  deleteAll(){
    let pokemonArrayJSON = JSON.stringify(([]));
    localStorage.setItem("pokeFavList", pokemonArrayJSON);
  }

}