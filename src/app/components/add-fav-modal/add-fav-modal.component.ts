import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataSourceService } from 'src/app/services/data-source.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-add-fav-modal',
  templateUrl: './add-fav-modal.component.html',
  styleUrls: ['./add-fav-modal.component.scss']
})
export class AddFavModalComponent implements OnInit {

  constructor( public dialogRef : MatDialogRef<AddFavModalComponent>,
              @Inject(MAT_DIALOG_DATA) public id: any,
              private pokemonsService: DataSourceService,
              private toast: ToastrService,
              private spinner:NgxSpinnerService ) { }
  
  alias:string =""
  pokemon:any=[];
  pokeSpinner:string = "pokeSpinner";
  ngOnInit(): void {
    this.getData()
   this.aliasName()
  }

  getData(){
  this.pokemonsService.getDataCard(this.id.idPokemon).subscribe(data=>{
    this.pokemon = data;   
  })
    

  }
  close(){
    this.dialogRef.close("closed")
  }

  

aliasName(){
    this.dialogRef.afterOpened().subscribe(()=>{
      this.pokemonsService.getPokemonListFav().subscribe(pokemons =>{
          pokemons.forEach(el =>{
            if(el.id === this.id.idPokemon){
             this.alias = el.alias;
            }
          })
      })
     })
  }
  
  addFav(){
    if(this.id.title === 0){
      let pokeFav = {
        id:this.pokemon.id,
        name:this.pokemon.name,
        alias: this.alias,
        pic: this.pokemon.sprites.other["official-artwork"].front_default,
        type:this.pokemon.types,
        habilities: this.pokemon.abilities
       }
       this.spinner.show(this.pokeSpinner);
       setTimeout(() => {
        this.spinner.hide(this.pokeSpinner);
        this.toast.success("Pokemon Capturado");
      }, 4000);
 
       this.pokemonsService.setLocalStorage(pokeFav);
       
    }else{
      if(this.alias === "" || this.alias == undefined){
        return 
      }
      let pokeFavEdit = {
        id:this.pokemon.id,
        name:this.pokemon.name,
        alias: this.alias,
        pic: this.pokemon.sprites.other["official-artwork"].front_default,
        type:this.pokemon.types,
        habilities: this.pokemon.abilities 
       }
       this.pokemonsService.editPokemonListFav(pokeFavEdit);

       this.toast.success("Alias Modificado Correctamente")
    }

    }  
    
}

