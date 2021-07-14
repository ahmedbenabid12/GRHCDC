import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  constructor(
    private clientService : ClientService , 
    private router : Router
  ) { }
  ngOnInit(): void {
  }

  ajouterClient(formAJout:NgForm){
    this.clientService.addClient(formAJout.value).subscribe(
      (data) => {
        //this.router.navigate(['/listeClient']);
        location.reload();
      } , 
      (erreur) => {
         console.log(erreur);
        }
      ) 
  }
}
