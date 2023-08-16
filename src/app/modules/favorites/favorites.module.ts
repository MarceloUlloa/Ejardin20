import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritespageComponent } from './pages/favoritespage/favoritespage.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    FavoritespageComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    SharedModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FavoritesModule { }