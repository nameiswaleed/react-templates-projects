import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from 'src/app/core/helpers/routes/routes';
import { DataService } from 'src/app/service/data.service';
import * as AOS from 'aos';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home-seven',
  templateUrl: './home-seven.component.html',
  styleUrls: ['./home-seven.component.scss']
})
export class HomeSevenComponent {
  public routes = routes;
  public categories: any = [];
  
  categoriesDataSource = new MatTableDataSource();
  searchInputCategory: any;
  selectedCategory: any = '';
  public  peopleFeedback: any = [];

  constructor(private DataService: DataService, public router: Router){
    this. peopleFeedback = this.DataService. peopleFeedback,
    (this.categories = this.DataService.categoriesList),
    
    (this.categoriesDataSource = new MatTableDataSource(this.categories));
  }

 
  public  peopleFeedbackOwlOptions: OwlOptions = {
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
        items:3,
        loop:true
      }
    },
    nav:false,
  };
  ngOnInit(): void {
    AOS.init({disable:'mobile'}
    );
  }
  searchCategory(value: any): void {
    const filterValue = value;
    this.categoriesDataSource.filter = filterValue.trim().toLowerCase();
    this.categories = this.categoriesDataSource.filteredData;
  }
}
