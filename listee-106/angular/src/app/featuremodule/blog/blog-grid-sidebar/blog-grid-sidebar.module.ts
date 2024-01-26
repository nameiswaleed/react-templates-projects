import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogGridSidebarRoutingModule } from './blog-grid-sidebar-routing.module';
import { BlogGridSidebarComponent } from './blog-grid-sidebar.component';


@NgModule({
  declarations: [
    BlogGridSidebarComponent
  ],
  imports: [
    CommonModule,
    BlogGridSidebarRoutingModule
  ]
})
export class BlogGridSidebarModule { }
