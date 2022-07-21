import { Component, OnInit } from '@angular/core';
import { DataSourceService } from 'src/app/services/data-source.service';
import * as AOS from 'aos';
import { FavModalComponent } from 'src/app/components/fav-modal/fav-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { AddFavModalComponent } from 'src/app/components/add-fav-modal/add-fav-modal.component';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-pokelist-fav',
  templateUrl: './pokelist-fav.component.html',
  styleUrls: ['./pokelist-fav.component.scss']
})
export class PokelistFavComponent implements OnInit {
 

  constructor( public pokeListFav: DataSourceService,
               public dialog: MatDialog,
               public toast: ToastrService) { }
  pokeList: any;
  page: number = 0;
  search: string ="";
  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load',AOS.refresh)
    this.getData()
  }


  getData(){
   this.pokeListFav.getPokemonListFav().subscribe(data =>{
    this.pokeList = data
   })
  }

  viewPokemon(id:number){
    this.dialog.open(FavModalComponent,{
      data: id,
    })
  }

deletePokemon(id:number){
  Swal.fire({
    title: 'Do you want to release the Pokémon?',
    confirmButtonText: 'Accept',
    confirmButtonColor: 'red',
    imageUrl: '/assets/img/pika.gif',
    imageHeight: 100,
    showDenyButton: true,
    denyButtonText: `Cancel`,
    denyButtonColor: 'gray',
  }).then((res) => {
    if (res.isConfirmed) {
      this.pokeListFav.deletePokemonListFav(id)
        this.getData()
        this.toast.success("pokémon released")
    } else {
      return;
    }
  });
}
editPokemon(id:number){
 this.dialog.open(AddFavModalComponent,{ 
  data: {
    idPokemon: id,
    title: 1
  } 
 }).afterClosed().subscribe(()=>{
  this.getData()
 })
}

deleteAll(){
  Swal.fire({
    title: ' Do you want to release all Pokémon?',
    confirmButtonText: 'Acept',
    confirmButtonColor: 'red',
    imageUrl: '/assets/img/allpokemons.gif',
    imageHeight: 100,
    showDenyButton: true,
    denyButtonText: `Cancel`,
    denyButtonColor: 'gray',
  }).then((res) => {
    if (res.isConfirmed) {
      this.pokeListFav.deleteAll()
        this.getData()
        this.toast.success("all pokémon released")
    } else {
      return;
    }
  });
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
