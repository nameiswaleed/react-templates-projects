import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/core/helpers/routes/routes';

@Component({
  selector: 'app-footer-two',
  templateUrl: './footer-two.component.html',
  styleUrls: ['./footer-two.component.css']
})
export class FooterTwoComponent {
  country: string = 'India';
  currency: string = 'USD';
  public routes = routes;
  constructor(public router: Router){

  }
}
