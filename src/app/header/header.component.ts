import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  constructor(){};

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  slogan : string = "Your one stop shop for everythig!";

  source: string = "/assets/shopping.jpg";

  getSlogan(){
    return this.slogan;
  }
}
