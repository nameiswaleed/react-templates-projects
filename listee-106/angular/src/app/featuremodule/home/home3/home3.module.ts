import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Home3RoutingModule } from './home3-routing.module';
import { Home3Component } from './home3.component';
import { HeaderThreeComponent } from './header-three/header-three.component';


import { FooterThreeComponent } from './footer-three/footer-three.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [
    Home3Component,
    HeaderThreeComponent,
    
    FooterThreeComponent
  ],
  imports: [
    CommonModule,
    Home3RoutingModule,
    SharedModule
  ]
})
export class Home3Module { }
