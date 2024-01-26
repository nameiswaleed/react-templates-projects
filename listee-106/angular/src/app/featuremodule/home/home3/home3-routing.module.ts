import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home3Component } from './home3.component';

const routes: Routes = [{ path: '', component: Home3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Home3RoutingModule { }
