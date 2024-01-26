import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { routes } from 'src/app/core/helpers/routes/routes';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  public routes = routes;
  constructor(public router: Router){

  }
  ngOnInit() {
    AOS.init({disable:'mobile'});
    
  }
  
}
