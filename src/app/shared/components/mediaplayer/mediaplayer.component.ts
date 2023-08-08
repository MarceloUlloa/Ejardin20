import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-mediaplayer',
  templateUrl: './mediaplayer.component.html',
  styleUrls: ['./mediaplayer.component.css']
})
export class MediaplayerComponent {
  mockCover: TrackModel = {
    cover: 'https://i.scdn.co/image/ab67616d000048515c29a88ba5341ca428f0c322',
    album: 'Number of the Beast',
    name: 'Run to the hills',
    url: 'http://localhost/track.mp3',
    _id: 1
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
