import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeFiveRoutingModule } from './home-five-routing.module';
import { HomeFiveComponent } from './home-five.component';
import { HeaderFiveComponent } from './header-five/header-five.component';
import { FooterFiveComponent } from './footer-five/footer-five.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [
    HomeFiveComponent,
    HeaderFiveComponent,
    FooterFiveComponent
  ],
  imports: [
    CommonModule,
    HomeFiveRoutingModule,
    SharedModule
  ]
})
export class HomeFiveModule { }
