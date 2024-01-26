import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/core/helpers/routes/routes';
import { DataService } from 'src/app/service/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MatTableDataSource } from '@angular/material/table';
import * as AOS from 'aos';

@Component({
  selector: 'app-home-five',
  templateUrl: './home-five.component.html',
  styleUrls: ['./home-five.component.scss']
})
export class HomeFiveComponent {
  
  public routes = routes;
  public categories: any = [];
  categoriesDataSource = new MatTableDataSource();
  selectedCategory: any = ''; 
  searchInputCategory: any;
  
  
  
  public trendingplace: any = [];
  public  businessslider: any = [];
  public customersays:any =[];
  constructor(private DataService: DataService, public router: Router){
    (this.trendingplace = this.DataService.trendingplace),
    (this.businessslider = this.DataService.businessslider),
    (this.categoriesDataSource = new MatTableDataSource(this.categories));
    (this.customersays = this.DataService.customersays),
    (this.categories = this.DataService.categoriesList)

  }
  public trendingplaceOwlOptions: OwlOptions = {
    items: 4,
    margin: 24,
    nav: true,
    dots: false,
    rtl: false,
    navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
    
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 4
      },
      1170: {
        items: 4,
        loop: true
      },
      1200: {
        items: 4,
        loop: true
      }
    },
   
  };
  public  businesssliderOwlOptions: OwlOptions = {
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
        items:4
      },
      1170:{
        items:5,
        loop:true
      }
    },
    nav:true,
  };
  public  customersaysOwlOptions: OwlOptions = {
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
        items:2
      },
      1170:{
        items:5,
        loop:true
      }
    },
    nav:true,
  };
  searchCategory(value: any): void {
    const filterValue = value;
    this.categoriesDataSource.filter = filterValue.trim().toLowerCase();
    this.categories = this.categoriesDataSource.filteredData;
  }
  ngOnInit(): void {
    AOS.init({disable:'mobile'}
    );
  }
}
