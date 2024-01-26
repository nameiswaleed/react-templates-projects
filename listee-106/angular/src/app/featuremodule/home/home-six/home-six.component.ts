import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from 'src/app/core/helpers/routes/routes';
import { DataService } from 'src/app/service/data.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-home-six',
  templateUrl: './home-six.component.html',
  styleUrls: ['./home-six.component.scss']
})
export class HomeSixComponent implements OnInit {
  public routes = routes;
  bsInlineValue = new Date();
 
  maxDate = new Date();
  public trendingsearch: any = [];
  public choosecar:any =[];
  public Makecar:any =[];
  public Topbrand:any =[];
  public Rentcar:any =[];
  public Teammembers:any =[];
  public clienttestimonials:any =[];

  constructor(private DataService: DataService, public router: Router){
    (this.trendingsearch = this.DataService.trendingsearch),
    (this.choosecar = this.DataService.choosecar),
    (this.Makecar = this.DataService.Makecar),
    (this.Topbrand = this.DataService.Topbrand),
    (this. Rentcar= this.DataService. Rentcar),
    (this. Teammembers= this.DataService.Teammembers),
    (this.clienttestimonials= this.DataService.clienttestimonials),
    this.maxDate.setDate(this.maxDate.getDate() + 7);
   
    
  }
  public trendingsearchOwlOptions: OwlOptions = {
    margin: 24,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 5,
      },
      940: {
        items: 5,
      },
    },
    nav: false,
  };
  public  choosecarOwlOptions: OwlOptions = {
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
  public  MakecarOwlOptions: OwlOptions = {
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
  public  TopbrandOwlOptions: OwlOptions = {
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
  public  RentcarOwlOptions: OwlOptions = {
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
  public  TeammembersOwlOptions: OwlOptions = {
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
  public  clienttestimonialsOwlOptions: OwlOptions = {
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
  direction(){
    this.router.navigate([routes.listinggridsidebar])
  }
  ngOnInit(): void {
    AOS.init({disable:'mobile'});
  }
}
