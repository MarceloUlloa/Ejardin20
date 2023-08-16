import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistorypageComponent } from './pages/historypage/historypage.component';
import { SharedModule } from '@shared/shared.module';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HistorypageComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    SharedModule,
    FormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HistoryModule { }
