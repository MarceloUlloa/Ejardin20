import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuard } from '@core/guards/session.guard';
import { LoginPageComponent } from '@modules/auth/pages/login-page/login-page.component';
import { HomepageComponent } from '@modules/home/pages/homepage/homepage.component';
import { MantenedoresComponent } from '@modules/mantenedores/pages/mantenedores/mantenedores.component';
import { NivelesComponent } from '@modules/niveles/pages/niveles/niveles.component';
 
const routes: Routes = [
  {
    path: 'auth',
    component: LoginPageComponent,
    loadChildren: () => import(`./modules/auth/auth.module`).then(m => m.AuthModule)
  },
  {
    path: '',
    component: HomepageComponent,
    loadChildren: () => import(`./modules/home/home.module`).then(m => m.HomeModule),
    canActivate:[SessionGuard]
  },
  {
    path: 'niveles',
    component: NivelesComponent,
    loadChildren: () => import(`./modules/niveles/niveles.module`).then(m => m.NivelesModule),
    canActivate:[SessionGuard]
  },
  {
    path: 'mantenedores',
    component: MantenedoresComponent,
    loadChildren: () => import(`./modules/mantenedores/mantenedores.module`).then(m => m.MantenedoresModule),
    canActivate:[SessionGuard]
  },  
  { path: 'niveles/:id', component: NivelesComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
