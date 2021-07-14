import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employe } from 'src/app/Model/employe';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-liste-employe',
  templateUrl: './liste-employe.component.html',
  styleUrls: ['./liste-employe.component.scss']
})
export class ListeEmployeComponent implements OnInit {
  employes !: Employe[] ; 

  totalEnregistrement !: number ;
  p: number = 1;
  itemParPage = 5 ;
  nomEmployeRec !:string ; 
  codeEmpRec !:number ; 
  nomRechercher  !: string ; 


  constructor(
    private employeService : EmployeService , 
    private router : Router
  ) { }

  ngOnInit(): void {
    
      this.employeService.listeEmployes(this.nomRechercher).subscribe(
        (data) => {
          this.employes=data;
          this.totalEnregistrement=data.length;
        } , 
        (erreur) => {
          console.log(erreur)
        }
      )
    
    

  }

  ajouterEmpl(formAjout:NgForm){
    this.employeService.ajouterEmploye(formAjout.value).subscribe(
      (data)=>{
        this.ngOnInit();
      } ,

      (erreur) =>{
        console.log(erreur);
      }
    )
  }

  recupEmp(codeEmploye : number){
    this.employeService.recupererEmploye(codeEmploye).subscribe(
      (data) => {
        this.nomEmployeRec=data.nomEmploye;
        this.codeEmpRec=data.codeEmploye;
      } , 
      (erreur) => {
        console.log(erreur)
      }
    )
  }

  modifierEmploye(formModif:NgForm){
    this.employeService.modifierEmploye(formModif.value , this.codeEmpRec).subscribe(
      (data) => {
        location.reload();
      } , 
      (erreur) => {
        console.log(erreur)
      }
    )
  }
  supprimerRecupererEmploye(codeEmpRec: number){
    this.employeService.supprimerRecupererEmploye(codeEmpRec).subscribe(
      (data) => {
        location.reload();
      } , 
      (erreur) => {
        console.log(erreur)
      }
    )
  }


  filtrer(){
    if (this.nomRechercher!=""){
      this.employes=this.employes.filter(res=> {
      return res.nomEmploye.toLocaleLowerCase().match(this.nomRechercher.toLocaleLowerCase());
    })
    }
    else {
      this.ngOnInit();
    }
  }
}
