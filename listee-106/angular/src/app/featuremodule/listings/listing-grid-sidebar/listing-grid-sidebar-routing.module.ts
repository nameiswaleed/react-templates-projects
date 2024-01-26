import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingGridSidebarComponent } from './listing-grid-sidebar.component';

const routes: Routes = [{ path: '', component: ListingGridSidebarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingGridSidebarRoutingModule { }
