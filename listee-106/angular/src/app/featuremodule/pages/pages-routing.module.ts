import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  { path: '', component: PagesComponent,children:[
    {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./categories/categories.module').then((m) => m.CategoriesModule),
  },
  {
    path: 'gallery',
    loadChildren: () =>
      import('./gallery/gallery.module').then((m) => m.GalleryModule),
  },
  {
    path: 'howitworks',
    loadChildren: () =>
      import('./howitworks/howitworks.module').then((m) => m.HowitworksModule),
  },
  {
    path: 'pricing',
    loadChildren: () =>
      import('./pricing/pricing.module').then((m) => m.PricingModule),
  },
  {
    path: 'privacy-policy',
    loadChildren: () =>
      import('./privacy-policy/privacy-policy.module').then(
        (m) => m.PrivacyPolicyModule
      ),
  },
  {
    path: 'service-details',
    loadChildren: () =>
      import('./service-details/service-details.module').then(
        (m) => m.ServiceDetailsModule
      ),
  },
  {
    path: 'terms-condition',
    loadChildren: () =>
      import('./terms-condition/terms-condition.module').then(
        (m) => m.TermsConditionModule
      ),
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then((m) => m.FaqModule),
  },

  ] },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
