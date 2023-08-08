import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritespageComponent } from './pages/favoritespage/favoritespage.component';

const routes: Routes = [
  {
    path: '',
    component: FavoritespageComponent,
    outlet:'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritesRoutingModule { }
