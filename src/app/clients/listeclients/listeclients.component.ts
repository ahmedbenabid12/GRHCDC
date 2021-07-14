import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/Model/client';
import { ClientService } from 'src/app/services/client.service';


@Component({
  selector: 'app-listeclients',
  templateUrl: './listeclients.component.html',
  styleUrls: ['./listeclients.component.scss']
})
export class ListeclientsComponent implements OnInit {
  oldNomClient !: String;
  codeClientRec !: number;
  clients !: Client[];

  p: number = 1;
  itemParPage = 5 ;
  totalEnregistrement !:number;

  constructor(
    private clientService : ClientService , 
    private router : Router
  ) { }

  ngOnInit(): void {
    this.clientService.getListeClients().subscribe(
      (data)=>{
        this.clients=data
        this.totalEnregistrement = data.length;
      } , 
      (erreur) => {console.log(erreur)}
    )

  }

  modifierClient (formModif:NgForm ){
    this.clientService.modifierClient(formModif.value,this.codeClientRec).subscribe(
      (data) => {
        location.reload();
      },
      (erreur) => {
        console.log(erreur); 
      }
    )
  }

  recupClient(codeClient : number){
    this.clientService.recupClient(codeClient).subscribe(
      (data)=> {
        this.oldNomClient = data.nomClient ; 
        this.codeClientRec = data.codeClient ; 
      } , 
      (erreur) => {console.log(erreur)}
    )
  }

  supprimerClient(codeClient : number){
    this.clientService.supprimerClient(codeClient).subscribe(
      (data)=> {
        location.reload();
      } , 
      (erreur)=> {
        console.log(erreur);
      }
    )
  }

  chercherClient(formRech:NgForm){
    this.clientService.chercherClient(formRech.value.nomClient).subscribe(
      (data)=> {
        this.clients=data;
        this.totalEnregistrement = data.length;
      } , 
      (erreur)=> {
        console.log(erreur);
      }
    )
  }

}
