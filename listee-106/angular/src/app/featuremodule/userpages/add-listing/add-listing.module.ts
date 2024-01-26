import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddListingRoutingModule } from './add-listing-routing.module';
import { AddListingComponent } from './add-listing.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';



@NgModule({
  declarations: [
    AddListingComponent
  ],
  imports: [
    CommonModule,
    AddListingRoutingModule,
    SharedModule
  ]
})
export class AddListingModule { }
