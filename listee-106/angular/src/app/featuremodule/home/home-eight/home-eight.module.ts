import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeEightRoutingModule } from './home-eight-routing.module';
import { HomeEightComponent } from './home-eight.component';
import { HeaderEightComponent } from './header-eight/header-eight.component';
import { FooterEightComponent } from './footer-eight/footer-eight.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [
    HomeEightComponent,
    HeaderEightComponent,
    FooterEightComponent
  ],
  imports: [
    CommonModule,
    HomeEightRoutingModule,
    SharedModule
  ]
})
export class HomeEightModule { }
