import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeSevenRoutingModule } from './home-seven-routing.module';
import { HomeSevenComponent } from './home-seven.component';
import { HeaderSevenComponent } from './header-seven/header-seven.component';
import { FooterSevenComponent } from './footer-seven/footer-seven.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [
    HomeSevenComponent,
    HeaderSevenComponent,
    FooterSevenComponent,
    
  ],
  imports: [
    CommonModule,
    HomeSevenRoutingModule,
    SharedModule
  ]
})
export class HomeSevenModule { }
