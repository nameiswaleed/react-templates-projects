import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermsConditionComponent } from './terms-condition.component';

const routes: Routes = [{ path: '', component: TermsConditionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermsConditionRoutingModule { }
