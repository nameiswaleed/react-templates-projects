import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogListRoutingModule } from './blog-list-routing.module';
import { BlogListComponent } from './blog-list.component';


@NgModule({
  declarations: [
    BlogListComponent
  ],
  imports: [
    CommonModule,
    BlogListRoutingModule
  ]
})
export class BlogListModule { }
