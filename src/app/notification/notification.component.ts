import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  //use templateUrl to add html file
  //use template to add html code directely
  //use '...' cote or double cote to add on one line
  //use ` .. ` this cote to add templte on multiple lines 
  template: `<div class="alert alert-success" [ngClass]="{fadeOut : displayNotification}">
                <p>this website uses cookies to provide better user experience.</p>
                <div class="close"><button class="btn" (click)="closeNotification()">X</button></div>
              </div>`,
  //styleUrl: './notification.component.css'
  styles: [".notification-div{margin: 10px 0px; padding : 10px 20px; background-color: #fad7a0; text-align:center;}", 
           "p{font-size: 14px;}", ".close{float: right; margin-top: -15px;}", 
           ".fadeOut {visibility: hidden; opacity: 0; transition: visibility 0s 2s, opacity 2s linear;}"]
})
export class NotificationComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  displayNotification : boolean= false;

  closeNotification(){
    this.displayNotification = true;
  }
}
