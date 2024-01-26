import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeNineRoutingModule } from './home-nine-routing.module';
import { HomeNineComponent } from './home-nine.component';
import { HeaderNineComponent } from './header-nine/header-nine.component';
import { FooterNineComponent } from './footer-nine/footer-nine.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [
    HomeNineComponent,
    HeaderNineComponent,
    FooterNineComponent
  ],
  imports: [
    CommonModule,
    HomeNineRoutingModule,
    SharedModule
  ]
})
export class HomeNineModule { }
