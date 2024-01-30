import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demmo',
  templateUrl: './demmo.component.html',
  styleUrl: './demmo.component.css'
})
export class DemmoComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  sayyHello(){
    console.log("hello from demmo component class!");
  }

}
