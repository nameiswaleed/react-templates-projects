import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeSixRoutingModule } from './home-six-routing.module';
import { HomeSixComponent } from './home-six.component';
import { HeaderSixComponent } from './header-six/header-six.component';
import { FooterSixComponent } from './footer-six/footer-six.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
 


@NgModule({
  declarations: [
    HomeSixComponent,
    HeaderSixComponent,
    FooterSixComponent
  ],
  imports: [
    CommonModule,
    HomeSixRoutingModule,SharedModule
  ]
})
export class HomeSixModule { }
