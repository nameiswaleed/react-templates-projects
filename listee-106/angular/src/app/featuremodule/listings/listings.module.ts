import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingsRoutingModule } from './listings-routing.module';
import { ListingsComponent } from './listings.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  declarations: [ListingsComponent],
  imports: [CommonModule, ListingsRoutingModule, SharedModule],
})
export class ListingsModule {}
