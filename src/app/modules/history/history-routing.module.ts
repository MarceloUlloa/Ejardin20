import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorypageComponent } from './pages/historypage/historypage.component';

const routes: Routes = [
  {
    path: '',
    component: HistorypageComponent,
    outlet:'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
