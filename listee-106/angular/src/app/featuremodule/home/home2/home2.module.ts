import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Home2RoutingModule } from './home2-routing.module';
import { Home2Component } from './home2.component';
import { HeaderTwoComponent } from './header-two/header-two.component';
import { FooterTwoComponent } from './footer-two/footer-two.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';



@NgModule({
  declarations: [
    Home2Component,
    HeaderTwoComponent,
    FooterTwoComponent
  ],
  imports: [
    CommonModule,
    Home2RoutingModule,
    SharedModule
  ]
})
export class Home2Module { }
