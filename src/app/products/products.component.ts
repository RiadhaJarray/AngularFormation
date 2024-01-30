import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  constructor(){}
  
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  products = [
    {id:1, name: 'minimalists Analog Watch', price: '190', color:'black', available:'Available', image:'/assets/products/p-image1.jpg'},
    {id:2, name: 'Hisense Ultra HD Smart TV', price: '3339', color:'black', available:'Available', image:'/assets/products/p-image2.jpg'},
    {id:3, name: 'Apple iPhone 12 pro', price: '1855', color:'black', available:'Not Available', image:'/assets/products/p-image3.jpg'},
    {id:4, name: 'LG Fully Automatic WAshing machine', price: '1765', color:'white', available:'Available', image:'/assets/products/p-image4.jpg'},
    {id:5, name: 'LG Refrigerator with Door Cooling', price: '2815', color:'white', available:'Not Available', image:'/assets/products/p-image5.jpg'},
    {id:6, name: 'Dell Inspiron One 27 Ryzen 7 HD', price: '2145', color:'white', available:'Available', image:'/assets/products/p-image6.jpg'},
    {id:7, name: 'Golf 7 gti', price: '33600', color:'white', available:'Available', image:'/assets/products/p-image7.jpg'},
    {id:8, name: 'ballon de la Champions League 2022', price: '760', color:'white', available:'Not Available', image:'/assets/products/p-image8.jpg'},
    {id:9, name: 'Fauteuil de Bureau, Charge 150KG', price: '300', color:'white', available:'Available', image:'/assets/products/p-image9.jpg'},
    {id:10, name: 'BMX se bikes DJ RIPPER HD 26 pro', price: '1110', color:'white', available:'Not Available', image:'/assets/products/p-image10.jpg'}
  ];

  getTotalProducts(){
    return this.products.length;
  }
  getTotalFreeProducts(){
    return this.products.filter(course => course.available === 'Available').length;
  }
  getTotalPremiumProducts(){
    return this.products.filter(course => course.available === 'Not Available').length;
  }

  productCountRadioButton: string = 'All';
  searchText:string = '';
 
  onFilterRadioButtonChanged(data:string){
    this.productCountRadioButton = data;
    //console.log(this.productCountRadioButton);
  }

  onSearchTextEntered(searchValue:string){
    this.searchText = searchValue;
    //console.log(this.searchText);
  }

}
