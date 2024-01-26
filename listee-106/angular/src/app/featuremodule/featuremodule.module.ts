import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturemoduleRoutingModule } from './featuremodule-routing.module';
import { FeaturemoduleComponent } from './featuremodule.component';
import { SharedModule } from '../shared/shared/shared.module';

@NgModule({
  declarations: [FeaturemoduleComponent],
  imports: [CommonModule, FeaturemoduleRoutingModule, SharedModule],
})
export class FeaturemoduleModule {}
