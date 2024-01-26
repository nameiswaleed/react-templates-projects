import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserpagesComponent } from './userpages.component';

const routes: Routes = [
  { path: '', component: UserpagesComponent,children:[
    {
    path: 'add-listing',
    loadChildren: () =>
      import('./add-listing/add-listing.module').then(
        (m) => m.AddListingModule
      ),
  },
  {
    path: 'bookmarks',
    loadChildren: () =>
      import('./bookmarks/bookmarks.module').then((m) => m.BookmarksModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'messages',
    loadChildren: () =>
      import('./messages/messages.module').then((m) => m.MessagesModule),
  },
  {
    path: 'my-listing',
    loadChildren: () =>
      import('./my-listing/my-listing.module').then((m) => m.MyListingModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'reviews',
    loadChildren: () =>
      import('./reviews/reviews.module').then((m) => m.ReviewsModule),
  },

  ] },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserpagesRoutingModule {}
