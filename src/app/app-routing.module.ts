import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { PokelistFavComponent } from './page/pokelist-fav/pokelist-fav.component';
import { PokelistComponent } from './page/pokelist/pokelist.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path:"pokeList",
    component:PokelistComponent
  },
  {
    path:"pokeListFav",
    component: PokelistFavComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
