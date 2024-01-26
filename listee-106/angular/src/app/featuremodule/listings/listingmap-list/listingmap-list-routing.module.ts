import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingmapListComponent } from './listingmap-list.component';

const routes: Routes = [{ path: '', component: ListingmapListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingmapListRoutingModule { }
