import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserpagesRoutingModule } from './userpages-routing.module';
import { UserpagesComponent } from './userpages.component';


@NgModule({
  declarations: [
    UserpagesComponent
  ],
  imports: [
    CommonModule,
    UserpagesRoutingModule
  ]
})
export class UserpagesModule { }
