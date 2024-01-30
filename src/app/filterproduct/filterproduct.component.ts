import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filterproduct',
  templateUrl: './filterproduct.component.html',
  styleUrl: './filterproduct.component.css'
})
export class FilterproductComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
//@Input('total') ===> total here is a custom alias so we use it in the property binding from parent(products) to child(filter)
  @Input('total') all: number = 0;
  @Input() free: number = 0;
  @Input() premium: number = 0;

  selectedRadioButtonValue: string = 'All';

  @Output()
  filterRadioButtonSelectionChanged: EventEmitter<string>= new EventEmitter<string>();

  onRadioButtonSelectionChanged(){
    this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    //console.log(this.selectedRadioButtonValue);
  }
}
