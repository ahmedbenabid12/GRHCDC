import { Component, OnInit } from '@angular/core';
import { Compte } from 'src/app/Model/compte';
import { Compteepargne } from 'src/app/Model/compteepargne';
import { CompteService } from 'src/app/services/compte.service';

@Component({
  selector: 'app-listecomptes',
  templateUrl: './listecomptes.component.html',
  styleUrls: ['./listecomptes.component.scss']
})
export class ListecomptesComponent implements OnInit {
  listeTotal: Compte[] = new Array();
  listeCC !: any;
  listeCE !: any; 

  p: number = 1;
  itemParPage = 5 ;
  totalEnregistrement !:number;


  constructor(
    private compteService : CompteService
  ) { }

  ngOnInit(): void {
    this.compteService.listeCompteCC().subscribe(
      (data) => {
        this.listeTotal = this.listeTotal.concat(data);
       } , 
      (erreur) => {
         console.log(erreur)  ; 
        }
    )

    this.compteService.listeCompteCE().subscribe(
      (data) => {
        this.listeTotal=this.listeTotal.concat(data).sort((a, b) => (a.codeCompte > b.codeCompte) ? -1 : 1) ; 
        this.totalEnregistrement=this.listeTotal.length;
       } , 
      (erreur) => {
         console.log(erreur)  ; 
        }
    )
  }


  

}
