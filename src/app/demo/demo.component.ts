import { Component, OnInit } from '@angular/core';
import { OnSameUrlNavigation } from '@angular/router';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnInit{

  constructor(){

  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  sayHello(inputEl : HTMLInputElement){
    alert('Hello ' + inputEl.value);
    //console.log(inputEl)
  }

}
