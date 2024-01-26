import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home4Component } from './home4.component';

const routes: Routes = [{ path: '', component: Home4Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Home4RoutingModule { }
