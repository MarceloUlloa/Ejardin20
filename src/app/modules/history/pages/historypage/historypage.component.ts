import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { SearchService } from '@modules/history/services/search.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-historypage',
  templateUrl: './historypage.component.html',
  styleUrls: ['./historypage.component.css']
})
export class HistorypageComponent implements OnInit {
  listResults$: Observable<any> = of([])
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    
  }

  receiveData(event: string): void {
    console.log("Estoy en el padre...", event)
    this.listResults$ = this.searchService.searchTracks$(event)

  }
}
