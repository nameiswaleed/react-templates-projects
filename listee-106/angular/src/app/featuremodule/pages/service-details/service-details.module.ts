import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceDetailsRoutingModule } from './service-details-routing.module';
import { ServiceDetailsComponent } from './service-details.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [
    ServiceDetailsComponent
  ],
  imports: [
    CommonModule,
    ServiceDetailsRoutingModule,
    SharedModule
  ]
})
export class ServiceDetailsModule { }
