import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HowitworksRoutingModule } from './howitworks-routing.module';
import { HowitworksComponent } from './howitworks.component';


@NgModule({
  declarations: [
    HowitworksComponent
  ],
  imports: [
    CommonModule,
    HowitworksRoutingModule
  ]
})
export class HowitworksModule { }
