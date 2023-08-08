import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '@modules/home/pages/homepage/homepage.component';
 
const routes: Routes = [
  {
    path: 'auth', //TODO: localhost:4200/
    loadChildren:() => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '', //TODO: localhost:4200/
    component: HomepageComponent,
    loadChildren:() => import('./modules/home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
