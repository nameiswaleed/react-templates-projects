import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home-one',
      },
      {
        path: 'home-one',
        loadChildren: () =>
          import('./home1/home1.module').then((m) => m.Home1Module),
      },
      {
        path: 'home-two',
        loadChildren: () =>
          import('./home2/home2.module').then((m) => m.Home2Module),
      },
      {
        path: 'home-three',
        loadChildren: () =>
          import('./home3/home3.module').then((m) => m.Home3Module),
      },
      {
        path: 'home-four',
        loadChildren: () =>
          import('./home4/home4.module').then((m) => m.Home4Module),
      },
      {
        path: 'home-five',
        loadChildren: () =>
          import('./home-five/home-five.module').then((m) => m.HomeFiveModule),
      },
      {
        path: 'home-six',
        loadChildren: () =>
          import('./home-six/home-six.module').then((m) => m.HomeSixModule),
      },
      {
        path: 'home-seven',
        loadChildren: () =>
          import('./home-seven/home-seven.module').then(
            (m) => m.HomeSevenModule
          ),
      },
      {
        path: 'home-eight',
        loadChildren: () =>
          import('./home-eight/home-eight.module').then(
            (m) => m.HomeEightModule
          ),
      },
      {
        path: 'home-nine',
        loadChildren: () =>
          import('./home-nine/home-nine.module').then((m) => m.HomeNineModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
