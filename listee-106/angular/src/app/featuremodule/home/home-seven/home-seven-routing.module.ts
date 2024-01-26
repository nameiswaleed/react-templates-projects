import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSevenComponent } from './home-seven.component';

const routes: Routes = [{ path: '', component: HomeSevenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeSevenRoutingModule { }
