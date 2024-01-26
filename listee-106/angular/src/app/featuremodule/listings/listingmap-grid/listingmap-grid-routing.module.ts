import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingmapGridComponent } from './listingmap-grid.component';

const routes: Routes = [{ path: '', component: ListingmapGridComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingmapGridRoutingModule { }
