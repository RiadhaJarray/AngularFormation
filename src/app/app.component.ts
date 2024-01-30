import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { DemmoComponent } from './demmo/demmo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  //encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'AngularComponent';

  @ViewChild('dobInput') dateOfBirth!: ElementRef;
  @ViewChild('ageInput') age!: ElementRef;

  @ViewChild(DemmoComponent, {static: true}) demmoComp!: DemmoComponent;

  calculateAge(){
    let birthyear = new Date(this.dateOfBirth?.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();

    let age = currentYear-birthyear;
    this.age.nativeElement.value = age;
   //console.log(this.dateOfBirth);
   //console.log(this.age);
  }
}
