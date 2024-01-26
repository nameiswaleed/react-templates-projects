import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingsComponent } from './listings.component';

const routes: Routes = [
  { path: '', component: ListingsComponent,children:[ {
    path: 'listing-grid',
    loadChildren: () =>
      import('./listing-grid/listing-grid.module').then(
        (m) => m.ListingGridModule
      ),
  },
  {
    path: 'listing-grid-sidebar',
    loadChildren: () =>
      import('./listing-grid-sidebar/listing-grid-sidebar.module').then(
        (m) => m.ListingGridSidebarModule
      ),
  },
  {
    path: 'listing-list-sidebar',
    loadChildren: () =>
      import('./listing-list-sidebar/listing-list-sidebar.module').then(
        (m) => m.ListingListSidebarModule
      ),
  },
  {
    path: 'listingmap-grid',
    loadChildren: () =>
      import('./listingmap-grid/listingmap-grid.module').then(
        (m) => m.ListingmapGridModule
      ),
  },
  {
    path: 'listingmap-list',
    loadChildren: () =>
      import('./listingmap-list/listingmap-list.module').then(
        (m) => m.ListingmapListModule
      ),
  },

  ] },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingsRoutingModule {}
