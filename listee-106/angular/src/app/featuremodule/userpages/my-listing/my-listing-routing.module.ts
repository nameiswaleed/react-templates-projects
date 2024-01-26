import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyListingComponent } from './my-listing.component';

const routes: Routes = [{ path: '', component: MyListingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyListingRoutingModule { }
