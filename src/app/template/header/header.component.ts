import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  nomEmploye !: string ; 
  constructor() { }

  ngOnInit(): void {
    this.nomEmploye=localStorage["nomEmploye"];
  }

  logout(){
      localStorage.clear()
  }

}
