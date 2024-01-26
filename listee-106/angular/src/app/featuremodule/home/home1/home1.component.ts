import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes/routes';
import { DataService } from 'src/app/service/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css'],
})
export class Home1Component implements
OnInit {
  public routes = routes;
  public categories: any = [];
  categoriesDataSource = new MatTableDataSource();
  searchInputCategory: any;
  selectedCategory: any = '';

  public featuredads: any = [];
  public testimonial: any = [];
  public blog: any = [];
  public pricing: any = [];
  public latestads: any = [];
  public universitiesCompanies: any = [];

  constructor(private DataService: DataService, public router: Router) {
    (this.categories = this.DataService.categoriesList),
      (this.categoriesDataSource = new MatTableDataSource(this.categories));

    (this.featuredads = this.DataService.featuredadsList),
      (this.testimonial = this.DataService.testimonialList),
      (this.blog = this.DataService.blogList),
      (this.pricing = this.DataService.pricingList),
      (this.latestads = this.DataService.latestadsList),
      (this.universitiesCompanies = this.DataService.universitiesCompanies);
  }
  ngOnInit(): void {
    AOS.init({disable:'mobile'}
    );
  }
  public featuredadsOwlOptions: OwlOptions = {
    margin: 24,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
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
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
  public testimonialOwlOptions: OwlOptions = {
    margin: 24,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
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
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
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

  searchCategory(value: any): void {
    const filterValue = value;
    this.categoriesDataSource.filter = filterValue.trim().toLowerCase();
    this.categories = this.categoriesDataSource.filteredData;
  }
  direction(){
    this.router.navigate([routes.listinggridsidebar])
  }
  
}
