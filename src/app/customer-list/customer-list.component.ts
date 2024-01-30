import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  selectedCustomer: any;

  customers: Customer[] = [
    {customerNo: 1, name: 'Riadh RIADH', adress:'' , city: 'Medenine', country: 'Tunisia'},
    {customerNo: 2, name: 'Maria MARIA', adress:'' , city: 'Toulouse', country: 'France'},
    {customerNo: 3, name: 'Ahmed AHMED', adress:'' , city: 'Tunis', country: 'Tunisia'},
    {customerNo: 4, name: 'Jean JEAN', adress:'' , city: 'Bordeaux', country: 'France'},
    {customerNo: 5, name: 'Diane DIANE', adress:'' , city: 'Toulouse', country: 'France'}
  ]
}
