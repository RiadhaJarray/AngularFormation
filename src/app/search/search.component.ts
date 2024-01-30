import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{

  constructor(){}
  
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  searchValue :string = '';

  changeSearchValue(eventData : Event){
    //console.log((<HTMLInputElement> eventData.target).value); 
    this.searchValue = (<HTMLInputElement> eventData.target).value;
  }
}
