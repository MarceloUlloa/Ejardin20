import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../../data/tracks.json'
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-trackspage',
  templateUrl: './trackspage.component.html',
  styleUrls: ['./trackspage.component.css']
})
export class TrackspageComponent implements OnInit {
  mockTrackList:Array<TrackModel> = [

  ]
  constructor() { }

  ngOnInit(): void {
    const { data }:any  = (dataRaw as any).default
    this.mockTrackList = data;
  }
}
