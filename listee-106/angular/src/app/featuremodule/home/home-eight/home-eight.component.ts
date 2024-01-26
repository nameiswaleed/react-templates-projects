import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from 'src/app/core/helpers/routes/routes';
import { DataService } from 'src/app/service/data.service';
import * as AOS from 'aos';
import { CountUp } from 'countup.js';

@Component({
  selector: 'app-home-eight',
  templateUrl: './home-eight.component.html',
  styleUrls: ['./home-eight.component.scss']
})
export class HomeEightComponent {
  public routes = routes;
  public jobholder: any = [];
  private countUp: CountUp | any;
  public universitiesCompanies:any =[]
  constructor(private DataService: DataService, public router: Router){
   
    (this.jobholder = this.DataService.jobholder),
    (this.universitiesCompanies = this.DataService.universitiesCompanies)


  }
  public jobholderOwlOptions: OwlOptions = {
    margin: 24,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots:false,
    navSpeed: 700,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
    responsive: {
      0:{
        items:1
      },
      768:{
        items:3
      },
      1170:{
        items:5,
        loop:true
      }
    },
    nav:true,
  };
  public universitiesCompaniesOwlOptions: OwlOptions = {
    loop: true,
    margin: 24,
    nav: false,
    autoplay: true,
    smartSpeed: 2000,

    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },

      550: {
        items: 2,
      },
      700: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
  };
  ngOnInit(): void {
    AOS.init({disable:'mobile'}
    );
  }
  ngAfterViewInit() {
    this.countUp = new CountUp('my-count-up', 0);
    this.countUp.start();
  }

}
