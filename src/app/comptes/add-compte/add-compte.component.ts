import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/Model/client';
import { Compte } from 'src/app/Model/compte';
import { ClientService } from 'src/app/services/client.service';
import { CompteService } from 'src/app/services/compte.service';

@Component({
  selector: 'app-add-compte',
  templateUrl: './add-compte.component.html',
  styleUrls: ['./add-compte.component.scss']
})
export class AddCompteComponent implements OnInit {
  decouvertTaux !:string ;
  nbreCompte !: number; 
  codeCompte !:string ;
  listeClient !: Client[] ; 
  typeCompte :string = "CC" ; 
  labelTypeCompte :string='Taux/Decouvert' ; 
  compte :Compte = new Compte() ; 

  constructor(
    private compteService : CompteService , 
    private clientService : ClientService , 
    private router : Router
  ) { }

  ngOnInit(): void {
    //compte le nombre des comptes  
    this.compteService.getNbComptes().subscribe(
      (data) => {
        this.nbreCompte = data;
        this.nbreCompte =  this.nbreCompte+1 ;
        this.codeCompte = "C"+this.nbreCompte;
       } , 
      (erreur) => {
         console.log(erreur)  ; 
        } 
    )
    

    // importer la liste des clients 
    this.clientService.getListeClients().subscribe(
      (data) => {
        this.listeClient=data;
      } , 
      (erreur) => {
        console.log(erreur);
      }
    )
    
  }

 
  onSubmit(addCompteForm: NgForm ){
     
    console.log(" compte.taux"+ addCompteForm.value.taux)
    console.log(" compte.decouvert"+ addCompteForm.value.decouvert)

      this.compteService.ajouterCompte(addCompteForm.value , this.codeCompte).subscribe(
        (data)=> {
         this.router.navigate(['/listeCompte']);
        } ,
        (erreur) => {
          console.log(erreur);
        }
      )
  }





  
}
