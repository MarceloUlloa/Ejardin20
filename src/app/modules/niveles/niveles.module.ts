import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NivelesRoutingModule } from './niveles-routing.module';
import { NivelesComponent } from './pages/niveles/niveles.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    NivelesComponent
  ],
  imports: [
    CommonModule,
    NivelesRoutingModule,
    SharedModule
  ]
})

export class NivelesModule { }
