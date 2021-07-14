import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL } from '../Connexion/url';
import { Abonnement } from '../Model/abonnement';
import { Individu } from '../Model/Individu';
import { Societe } from '../Model/Societe';


@Injectable({
  providedIn: 'root'
})
export class IndividuService {

  postData = {
    "nom" : '' ,
    "abonnement" : {
        "id" : 0
    } , 
    "societe"  : {
        "id":0
    }
}

  url=new URL();
  private link=this.url.link;

  constructor(
    private httpClient : HttpClient
  ) { }

  addIndividu(individu : Individu){
    this.postData.nom=individu.nom;
    this.postData.abonnement.id=Number(individu.abonnement);
    this.postData.societe.id=Number(individu.societe);

    return this.httpClient.post(this.link+"addIndividu",this.postData);

  }

  listeSociete() : Observable<Societe>{
    return this.httpClient.get<Societe>(this.link+"listesociete");
  }

  listeAbonnement() : Observable<Abonnement>{
    return this.httpClient.get<Abonnement>(this.link+"listeAbonnement");
  }
}
