import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingGridRoutingModule } from './listing-grid-routing.module';
import { ListingGridComponent } from './listing-grid.component';


@NgModule({
  declarations: [
    ListingGridComponent
  ],
  imports: [
    CommonModule,
    ListingGridRoutingModule
  ]
})
export class ListingGridModule { }
