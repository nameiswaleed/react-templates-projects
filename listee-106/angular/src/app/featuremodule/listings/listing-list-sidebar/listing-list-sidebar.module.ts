import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingListSidebarRoutingModule } from './listing-list-sidebar-routing.module';
import { ListingListSidebarComponent } from './listing-list-sidebar.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  declarations: [
    ListingListSidebarComponent
  ],
  imports: [
    CommonModule,
    ListingListSidebarRoutingModule,
    SharedModule
  ]
})
export class ListingListSidebarModule { }
