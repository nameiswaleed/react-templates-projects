import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingmapGridRoutingModule } from './listingmap-grid-routing.module';
import { ListingmapGridComponent } from './listingmap-grid.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  declarations: [ListingmapGridComponent],
  imports: [CommonModule, ListingmapGridRoutingModule, SharedModule],
})
export class ListingmapGridModule {}
