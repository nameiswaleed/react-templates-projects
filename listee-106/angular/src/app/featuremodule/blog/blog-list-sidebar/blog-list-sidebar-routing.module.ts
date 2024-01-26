import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListSidebarComponent } from './blog-list-sidebar.component';

const routes: Routes = [{ path: '', component: BlogListSidebarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogListSidebarRoutingModule { }
