import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogGridRoutingModule } from './blog-grid-routing.module';
import { BlogGridComponent } from './blog-grid.component';


@NgModule({
  declarations: [
    BlogGridComponent
  ],
  imports: [
    CommonModule,
    BlogGridRoutingModule
  ]
})
export class BlogGridModule { }
