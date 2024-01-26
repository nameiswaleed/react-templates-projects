import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsConditionRoutingModule } from './terms-condition-routing.module';
import { TermsConditionComponent } from './terms-condition.component';


@NgModule({
  declarations: [
    TermsConditionComponent
  ],
  imports: [
    CommonModule,
    TermsConditionRoutingModule
  ]
})
export class TermsConditionModule { }
