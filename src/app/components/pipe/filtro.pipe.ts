import { Pipe, PipeTransform } from '@angular/core';
import { Pokemons } from 'src/app/model/data';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(pokemons: Pokemons[], page: number = 0, search: string = ""): Pokemons[] {

    if(search.length === 0){
      return pokemons.slice(page, page +8)
    }
    const filterdPokemons = pokemons.filter(poke => poke.name.includes(search))
    return filterdPokemons.slice(page,page + 8);
  }

}
