import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from 'src/app/core/helpers/routes/routes';
import { DataService } from 'src/app/service/data.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-home-nine',
  templateUrl: './home-nine.component.html',
  styleUrls: ['./home-nine.component.scss']
})
export class HomeNineComponent {
  public routes = routes; 
  public  listing: any = [];
  public managementcomponies:any =[];
  public hoildayCabin:any=[];
  public bestrooms :any=[];
  public recentproperties:any=[];
  public ourtestimonials:any=[];
  public recentarticle:any=[];
  constructor(private DataService: DataService, public router: Router){
    
    (this.listing = this.DataService.listing),
    (this.managementcomponies = this.DataService.managementcomponies),
    (this.hoildayCabin = this.DataService.hoildayCabin),
    (this.bestrooms = this.DataService.bestrooms),
    (this.recentproperties = this.DataService.recentproperties),
    (this.ourtestimonials = this.DataService.ourtestimonials),
    (this. recentarticle = this.DataService. recentarticle)


  }
  public listingOwlOptions: OwlOptions = {
    margin: 24,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots:true,
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
    nav:false,
  };
  public managementcomponiesOwlOptions: OwlOptions = {
    margin: 24,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots:true,
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
        items:4
      },
      1170:{
        items:5,
        loop:true
      }
    },
    nav:false,
  };
  public hoildayCabinOwlOptions: OwlOptions = {
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
        items:1
      },
      1170:{
        items:1,
        loop:false
      }
    },
    nav:true,
  };
  public bestroomsOwlOptions: OwlOptions = {
    margin: 24,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots:true,
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
        items:4
      },
      1170:{
        items:1,
        loop:true
      }
    },
    nav:false,
  };
  public recentpropertiesOwlOptions: OwlOptions = {
    margin: 24,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots:true,
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
        items:2
      },
      1170:{
        items:1,
        loop:true
      }
    },
    nav:false,
  };
  public ourtestimonialsOwlOptions: OwlOptions = {
    margin: 24,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots:true,
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
        items:1,
        loop:true
      }
    },
    nav:false,
  };
  public recentarticleOwlOptions: OwlOptions = {
    margin: 24,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots:true,
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
        items:1,
        loop:true
      }
    },
    nav:false,
  };
 
  ngOnInit(): void {
    AOS.init({disable:'mobile'}
    );
  }
}
