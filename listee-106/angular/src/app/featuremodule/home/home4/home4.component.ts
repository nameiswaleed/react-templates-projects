import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes/routes';
import { DataService } from 'src/app/service/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-home4',
  templateUrl: './home4.component.html',
  styleUrls: ['./home4.component.css']
})
export class Home4Component implements OnInit{
  public routes=routes;
  public peoplefeedback:any=[];
  public businesstypedata:any=[];
  constructor(private Dataservice:DataService,public router:Router){
    this.peoplefeedback=this.Dataservice.peoplefeedback,
    this.businesstypedata=this.Dataservice.businesstypedata
  }
  ngOnInit(): void {
    AOS.init({disable:'mobile'});
  }
  public peoplefeedbackOwlOptions:OwlOptions = {
    loop:true,
    margin:24,
    nav:true,
    dots: false,
    smartSpeed: 2000,
    navText : ["<i class='fa-solid fa-angle-left'></i>","<i class='fa-solid fa-angle-right'></i>"],
    
    responsive:{
      0:{
        items:1
      },
      
      550:{
        items:1
      },
      700:{
        items:2
      },
      1000:{
        items:2
      }
    }
    }
  public businesstypedataOwlOptions:OwlOptions = {
    items:6,
    margin:24,
    nav:true,
    dots:false,
    rtl: false,
    navText : ["<i class='fa-solid fa-angle-left'></i>","<i class='fa-solid fa-angle-right'></i>"],
   
    
    responsive:{
      0:{
        items:1
      },
      768:{
        items:3
      },
      1170:{
        items:4 ,
        loop:true
      },
      1024:{
        items:5 ,
        loop:true
      },
      1400:{
        items:6 ,
        loop:true
      }
    }
      } 
      path(){
        this.router.navigate([routes.listinggridsidebar])
      }
     
}
