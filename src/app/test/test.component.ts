import { Component, OnInit } from '@angular/core';
import { Client } from '../Model/client';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }
  client !: Client;

  ngOnInit(): void {
  }

}
