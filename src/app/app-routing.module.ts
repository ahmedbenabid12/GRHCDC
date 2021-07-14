import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './clients/add-client/add-client.component';
import { ListeclientsComponent } from './clients/listeclients/listeclients.component';
import { AddCompteComponent } from './comptes/add-compte/add-compte.component';
import { ListecomptesComponent } from './comptes/listecomptes/listecomptes.component';
import { ModifiercompteComponent } from './comptes/modifiercompte/modifiercompte.component';
import { ListeEmployeComponent } from './employes/liste-employe/liste-employe.component';
import { LoginComponent } from './Login/login/login.component';
import { AuthentificationService } from './services/authentification.service';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path : '' , component : LoginComponent} ,
  {path : 'test' , component : TestComponent} ,
  {path : 'listeClient' , component : ListeclientsComponent , canActivate:[AuthentificationService]}  ,
  {path : 'addClient' , component : AddClientComponent , canActivate:[AuthentificationService]}  ,
  {path : 'listeEmploye' , component : ListeEmployeComponent , canActivate:[AuthentificationService]} ,
  {path : 'listeCompte' , component : ListecomptesComponent , canActivate:[AuthentificationService]} , 
  {path : 'addCompte' , component : AddCompteComponent , canActivate:[AuthentificationService]} ,
  {path : 'modifierCompte/:codeClient' , component : ModifiercompteComponent , canActivate:[AuthentificationService]} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
