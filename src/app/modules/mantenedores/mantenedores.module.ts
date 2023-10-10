import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenedoresRoutingModule } from './mantenedores-routing.module';
import { MantenedoresComponent } from './pages/mantenedores/mantenedores.component';
import { ModalComponent } from '@modules/niveles/pages/niveles/modalficha.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    MantenedoresComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    MantenedoresRoutingModule,
    SharedModule,
  ]
})
export class MantenedoresModule { }
