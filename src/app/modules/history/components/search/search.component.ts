import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  @Output() callBackData: EventEmitter<any> = new EventEmitter()
  
  src=''
  constructor() {}

  ngOnInit(): void {
    
  }

  callSearch(term:string): void {

    if (term.length >= 3){
      this.callBackData.emit(term)
      console.log('Llamamos a la API', term)
    }

    
  }

}
