import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogListSidebarRoutingModule } from './blog-list-sidebar-routing.module';
import { BlogListSidebarComponent } from './blog-list-sidebar.component';


@NgModule({
  declarations: [
    BlogListSidebarComponent
  ],
  imports: [
    CommonModule,
    BlogListSidebarRoutingModule
  ]
})
export class BlogListSidebarModule { }
