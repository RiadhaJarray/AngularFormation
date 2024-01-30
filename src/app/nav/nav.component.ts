import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-nav]', //we add [] componennt can be used as html attribute
  selector: '.app-nav',  //we add . componennt can be used as css class
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{
  constructor() {}

  ngOnInit(): void {
   // throw new Error('Method not implemented.');
  }
 sitename : string = 'eShopping';
}
