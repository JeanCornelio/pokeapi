import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PokelistComponent } from './page/pokelist/pokelist.component';
import { PokelistFavComponent } from './page/pokelist-fav/pokelist-fav.component';
import { HomeComponent } from './home/home/home.component';
import { NavComponent } from './layout/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './layout/footer/footer.component';
import {MatTableModule} from '@angular/material/table';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {MatDialogModule} from '@angular/material/dialog';
import { FavModalComponent } from './components/fav-modal/fav-modal.component';
import { AddFavModalComponent } from './components/add-fav-modal/add-fav-modal.component';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ToastrModule } from 'ngx-toastr';
import { FiltroPipe } from './components/pipe/filtro.pipe';
import { InterceptorService } from './services/interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    PokelistComponent,
    PokelistFavComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    FavModalComponent,
    AddFavModalComponent,
    FiltroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    SweetAlert2Module,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      timeOut: 1200,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })
  
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
