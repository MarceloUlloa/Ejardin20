import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TracksRoutingModule } from './tracks-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { TrackspageComponent } from './pages/trackspage/trackspage.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    TrackspageComponent
  ],
  imports: [
    CommonModule,
    TracksRoutingModule,
    SharedModule
  ]
})
export class TracksModule { }
