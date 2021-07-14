import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeclientsComponent } from './clients/listeclients/listeclients.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { ListeEmployeComponent } from './employes/liste-employe/liste-employe.component';
import { AddClientComponent } from './clients/add-client/add-client.component';
import { ListecomptesComponent } from './comptes/listecomptes/listecomptes.component';
import { AddCompteComponent } from './comptes/add-compte/add-compte.component';
import { LoginComponent } from './Login/login/login.component';
import { HeaderComponent } from './template/header/header.component';
import { MatSliderModule } from '@angular/material/slider';
import { TestComponent } from './test/test.component';
import { ModifiercompteComponent } from './comptes/modifiercompte/modifiercompte.component';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    ListeclientsComponent,
    ListeEmployeComponent,
    AddClientComponent,
    ListecomptesComponent,
    AddCompteComponent,
    LoginComponent,
    HeaderComponent,
    TestComponent,
    ModifiercompteComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , 
    HttpClientModule,
    FormsModule , 
    NgxPaginationModule , 
    MatSliderModule

  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
