import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingmapListRoutingModule } from './listingmap-list-routing.module';
import { ListingmapListComponent } from './listingmap-list.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  declarations: [ListingmapListComponent],
  imports: [CommonModule, ListingmapListRoutingModule, SharedModule],
})
export class ListingmapListModule {}
