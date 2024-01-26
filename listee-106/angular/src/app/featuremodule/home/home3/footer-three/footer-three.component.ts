import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/core/helpers/routes/routes';

@Component({
  selector: 'app-footer-three',
  templateUrl: './footer-three.component.html',
  styleUrls: ['./footer-three.component.css'],
})
export class FooterThreeComponent {
  country: string = 'India';
  currency: string = 'USD';
  public routes = routes;
  constructor(public router: Router){

  }
}
