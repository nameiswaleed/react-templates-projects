import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogGridSidebarComponent } from './blog-grid-sidebar.component';

const routes: Routes = [{ path: '', component: BlogGridSidebarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogGridSidebarRoutingModule { }
