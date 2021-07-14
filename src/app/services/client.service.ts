import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../Model/client';
import { Observable } from 'rxjs';
import { URL } from '../Connexion/url';



@Injectable({
  providedIn: 'root'
})
export class ClientService {
  url = new URL(); 
  private link=this.url.link;
  
  constructor(
    private httpClient : HttpClient
  ) { }

  getListeClients() : Observable<Client[]> {
    
    return this.httpClient.get<Client[]>(this.link+"clients");
  }

  getListeClientsPagination(page : number , size : number) : Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.link+"clientsPagination?page="+page+"&size="+size);
  }

  addClient(client :  Client){
    return this.httpClient.post(this.link+"clients" , client);  
  }

  recupClient(codeClient: number):Observable<Client>{
    return this.httpClient.get<Client>(this.link+"unClient/"+codeClient);
  }

  modifierClient (client : Client , codeClient : number){
    return this.httpClient.put(this.link+"client/"+codeClient,client);
  }

  supprimerClient(codeClient :number){
    return this.httpClient.delete(this.link+"client/"+codeClient);
  }

  chercherClient(nomClient : String) : Observable<Client[]>{
    return this.httpClient.get<Client[]>(this.link+"chercherClient?nomClient="+nomClient);
  }
}
