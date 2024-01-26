import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingGridComponent } from './listing-grid.component';

const routes: Routes = [{ path: '', component: ListingGridComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingGridRoutingModule { }
