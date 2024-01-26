import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeEightComponent } from './home-eight.component';

const routes: Routes = [{ path: '', component: HomeEightComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeEightRoutingModule { }
