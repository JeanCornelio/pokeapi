import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as AOS from 'aos';
import { AddFavModalComponent } from 'src/app/components/add-fav-modal/add-fav-modal.component';
import { DataSourceService } from 'src/app/services/data-source.service';
import { SpinerService } from 'src/app/services/spiner.service';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.scss']
})
export class PokelistComponent implements OnInit {

  constructor( private dataSource: DataSourceService,
               public dialog: MatDialog,
               public pokeListfav: DataSourceService,
                private spiner: SpinerService) { }

  pokeList:any=[];
  pokeListCopy:any=[];
  page: number = 0;
  search: string ="";
  pokeImagen: string = "";
  pokeDataImagen: any;

  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load',AOS.refresh)
    this.getData()
  } 

  getData(){
    this.dataSource.getData().subscribe(data=>{
      this.pokeList = data;
      this.pokeListCopy = [...this.pokeList.results];
      this.pokeListCopy.map((element:any) => {
        const url = element.url.split('/')
        element["status"] = "false" ;
        element["id"] = url[6];
      });
      this.validatePokemonLocaleStorage()  
    })
  }
  addFav(id:number){
    this.dialog.open(AddFavModalComponent,{
      data: {
        idPokemon: id,
        title: 0
      } 
    }).afterClosed().subscribe(()=>{
      this.validatePokemonLocaleStorage()
     
    })
 
  } 
  
 validatePokemonLocaleStorage(){
      let pokemonListFav;
      //Asigno todos los elementos que existen en la locale Storage
      pokemonListFav = JSON.parse(localStorage.getItem('pokeFavList') || '{}'); 
      //Busco todos los elementos que tengan el mismo nombre
      pokemonListFav.forEach((el:any)=>{
      this.pokeListCopy.forEach((element:any) => {
      //comparo elementos
           if(element.name === el.name){
      //Cambio la propiedad a true
            element.status = true;
          }
      });
    })
}

onSearchPokemons(search:string){
  this.page = 0
  this.search = search;
}

nextPage(){
  this.page +=8;
}

prevPage(){
  if(this.page > 0){
    this.page -=8;
  }
}
}
