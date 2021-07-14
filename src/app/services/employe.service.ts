import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employe } from '../Model/employe';
import { URL } from '../Connexion/url';
@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  postData = {
    "nomEmploye" : ""  , 
    "login" :"" , 
    "password" :"" ,
    "numEmpSupp" : {
        "codeEmploye" : 0
    } 
  } 

  url = new URL(); 
  private link=this.url.link;
  employes !: Employe[]; 
  
   
  
  constructor(
    private httpClient :  HttpClient 
  ) { }


    listeEmployes( nomRechercher : string) : Observable<Employe[]> {
      console.log("nomRechercher : "+nomRechercher);
      return this.httpClient.get<Employe[]>(this.link+"employes");
    }
    

    ajouterEmploye(employe : Employe) {
      this.postData.nomEmploye=employe.nomEmploye; 
      this.postData.login=employe.login; 
      this.postData.password=employe.password; 
      this.postData.numEmpSupp.codeEmploye=Number(employe.numEmpSupp); 
      return this.httpClient.post(this.link+"employes",this.postData);
    }

    recupererEmploye(codeEmploye : number) : Observable<Employe>{
      return this.httpClient.get<Employe>(this.link+"unEmploye?codeEmploye="+codeEmploye);
    }
    
    modifierEmploye(employe : Employe, codeEmploye : number){
      this.postData.nomEmploye=employe.nomEmploye; 
      return this.httpClient.put(this.link+"modifierEmploye/"+codeEmploye,this.postData);
    }

    supprimerRecupererEmploye(codeEmploye : number){
      return this.httpClient.put(this.link+"supprimerEmp/"+codeEmploye,this.postData);
    }

    connexion(login : string , password : string) :  Observable<Employe> {
      return this.httpClient.get<Employe>(this.link+"connexion?login="+login+"&password="+password);
    }
}
