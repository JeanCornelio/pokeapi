import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataSourceService } from 'src/app/services/data-source.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-fav-modal',
  templateUrl: './fav-modal.component.html',
  styleUrls: ['./fav-modal.component.scss']
})
export class FavModalComponent implements OnInit {

  pokemonCardData:any;
  pokeImg:string = ""
  
  constructor( private dialogRef: MatDialogRef<FavModalComponent>,
               @Inject(MAT_DIALOG_DATA) public id: any,
               public pokemon: DataSourceService 
               ) { }

  
  ngOnInit(): void {
 
    this.getPokemonCard()
  }

  close(){
    this.dialogRef.close("Closed")
  }

  getPokemonCard(){
    this.pokemon.getPokemonListFav().subscribe(data =>{
      data.forEach(el =>{
        if(el.id === this.id){
          this.pokemonCardData = el;
        }
      })
    });
  }
  open(){
    this.dialogRef.afterOpened().subscribe(()=>{
      this.getPokemonCard()
    })
  }


  
}
