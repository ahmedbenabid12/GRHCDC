import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/Model/client';
import { Compte } from 'src/app/Model/compte';
import { ClientService } from 'src/app/services/client.service';
import { CompteService } from 'src/app/services/compte.service';

@Component({
  selector: 'app-modifiercompte',
  templateUrl: './modifiercompte.component.html',
  styleUrls: ['./modifiercompte.component.scss']
})
export class ModifiercompteComponent implements OnInit {
  codeCompteRec  !: string;
  dateCreationRec !:any ; 
  nomClientRec !: any ; 
  codeClientRec !: any ;
  soldeRec !:any ; 
  typeCompteRec !: any;
  tauxRec !:any ; 
  decouvertRec !:any ; 


  compte !: any;
  listeClient !: Client[] ; 
  typeCompte !:string ; 


  constructor(
    private activatedRoute : ActivatedRoute , 
    private compteService : CompteService ,
    private clientService : ClientService , 
    public datepipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.chargerCompte();

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

  //pour charger le compte 
  chargerCompte(){
    this.activatedRoute.params.subscribe(
      (params) => {
        this.codeCompteRec=params.codeClient;
        this.compteService.getUnCompte(this.codeCompteRec).subscribe(
          (data)=> { 
            this.compte=data ; 
            this.dateCreationRec =this.datepipe.transform(this.compte.dateCreation, 'yyyy-MM-dd'); 
            this.codeClientRec = this.compte.codeClient.codeClient ;     
            this.nomClientRec = this.compte.codeClient.nomClient ;    
            this.soldeRec = this.compte.solde;        
            this.tauxRec = this.compte.taux;                                  
            this.decouvertRec = this.compte.decouvert;        
            if (this.tauxRec==null) {
              this.typeCompte="CC"
            }
            if (this.decouvertRec==null) {
              this.typeCompte="CE"
            }
            
          }, 
          (erreur) => {
            console.log(erreur)
          }
        )
      } , 
      (erreur) => {
        console.log(erreur)
      }
    )
  }

  onSubmit(form : NgForm){
    console.log(form.value);
  }

}
