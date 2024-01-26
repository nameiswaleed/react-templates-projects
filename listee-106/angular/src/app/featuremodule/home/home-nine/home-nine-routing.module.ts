import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeNineComponent } from './home-nine.component';

const routes: Routes = [{ path: '', component: HomeNineComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeNineRoutingModule { }
