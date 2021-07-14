import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL } from '../Connexion/url';
import { Compte } from '../Model/compte';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  res !: any ; 

postDataCC= 
{
  "codeCompte": "",
  "dateCreation": "",
  "solde": 0,
  "codeClient": {
      "codeClient": 0
  },
  "codeEmploye": {
      "codeEmploye": 0
  },
  "decouvert" : 0 
}

postDataCE= 
{
  "codeCompte": "",
  "dateCreation": "",
  "solde": 0,
  "codeClient": {
      "codeClient": 0
  },
  "codeEmploye": {
      "codeEmploye": 0
  },
  "taux" : 999
}


  url = new URL(); 
  private link=this.url.link;
  
  constructor(
    private httpClient : HttpClient
  ) { }

  public listeCompteCC() : Observable<Compte>{
    return this.httpClient.get<Compte>(this.link+"/listeCC");
  }

  public listeCompteCE() : Observable<Compte>{
    return this.httpClient.get<Compte>(this.link+"/listeCE");
  }

  public getUnCompte( codeClient : string) : Observable<Compte>{
    return this.httpClient.get<Compte>(this.link+"/unCompte/"+codeClient);
  }

  public getNbComptes() : Observable<number>{
    return this.httpClient.get<number>(this.link+"/nombreComptes");
  }

  public ajouterCompte(compte:Compte , codeCompte : string ) :Observable<Compte> {
    
    this.postDataCE.codeCompte=this.postDataCC.codeCompte=codeCompte;
    this.postDataCE.dateCreation= this.postDataCC.dateCreation=compte.dateCreation;
    this.postDataCE.solde= this.postDataCC.solde=compte.solde;
    this.postDataCE.codeClient.codeClient = this.postDataCC.codeClient.codeClient=compte.codeClient;
    this.postDataCE.codeEmploye.codeEmploye =this.postDataCC.codeEmploye.codeEmploye=localStorage["codeEmploye"];
   
    

    if (compte.typeCompte == "CC") {
      this.postDataCC.decouvert=compte.decouvert;
      this.res= this.httpClient.post(this.link+"addCompteCourant",this.postDataCC);
    } else if (compte.typeCompte == 'CE'){
      this.postDataCE.taux=compte.taux;
      this.res= this.httpClient.post(this.link+"addCompteEpargne",this.postDataCE);
    }
    return this.res ; 
  }

}
