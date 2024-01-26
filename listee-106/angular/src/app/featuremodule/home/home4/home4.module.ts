import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Home4RoutingModule } from './home4-routing.module';
import { Home4Component } from './home4.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { FooterFourComponent } from './footer-four/footer-four.component';
import { HeaderFourComponent } from './header-four/header-four.component';


@NgModule({
  declarations: [
    Home4Component,
    FooterFourComponent,
    HeaderFourComponent
  ],
  imports: [
    CommonModule,
    Home4RoutingModule,SharedModule
  ]
})
export class Home4Module { }
