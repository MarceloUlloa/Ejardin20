import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistorypageComponent } from './pages/historypage/historypage.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    HistorypageComponent
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    SharedModule
  ]
})
export class HistoryModule { }
