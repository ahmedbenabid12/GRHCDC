import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  nom  !: string ;
  constructor(
    private employeService : EmployeService , 
    private router  : Router
  ) { }

  ngOnInit(): void {
  }


  connexion(formLogin:NgForm){
    this.employeService.connexion(formLogin.value.login , formLogin.value.password).subscribe(
      (data) => {
        localStorage.setItem("nomEmploye" , data.nomEmploye)
        localStorage.setItem("codeEmploye" , ""+data.codeEmploye)
        this.router.navigateByUrl('listeClient')
      } , 
      (erreur) => {
        console.log(erreur);
      }
    )
  }

}
