import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NivelesRoutingModule } from './niveles-routing.module';
import { NivelesComponent } from './pages/niveles/niveles.component';
import { SharedModule } from '@shared/shared.module';
import { ModalComponent } from './pages/niveles/modalficha.component';



@NgModule({
  declarations: [
    NivelesComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    NivelesRoutingModule,
    SharedModule,
  ]
})

export class NivelesModule { }
