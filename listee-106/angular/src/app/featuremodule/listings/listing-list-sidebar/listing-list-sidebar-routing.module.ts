import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingListSidebarComponent } from './listing-list-sidebar.component';

const routes: Routes = [{ path: '', component: ListingListSidebarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingListSidebarRoutingModule { }
