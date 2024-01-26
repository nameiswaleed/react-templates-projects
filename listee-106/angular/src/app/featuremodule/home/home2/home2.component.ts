import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes/routes';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/service/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { Lightbox } from 'ngx-lightbox';
import { Router } from '@angular/router';
import * as AOS from 'aos';
interface Food {
  value: string |any;
  viewValue: string ;
}

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css'],
})
export class Home2Component implements OnInit{
  public routes = routes;
  public popular: any = [];
  public venus: any = [];
  public latestBlog: any = [];
  public bridesdata: any = [];
  public weddingpackagedata: any = [];
  public lovedata: any = [];
  public amazingwork: any = [];
  public amazingworklightbox:any =[];
  selectedCategory: any = '';
  constructor(private DataService: DataService,private _lightbox: Lightbox,public router:Router) {
    (this.popular = this.DataService.popularList),
      (this.venus = this.DataService.venusList),
      (this.latestBlog = this.DataService.latestBlog),
      (this.bridesdata = this.DataService.bridesdata);
    (this.weddingpackagedata = this.DataService.weddingpackagedata),
      (this.lovedata = this.DataService.lovedata),
      (this.amazingwork = this.DataService.amazingwork);
      for (let i = 1; i <= 6; i++) {
        const src = 'assets/img/gallery/gallery-0' + i + '.jpg';
        
        
  
        this.amazingworklightbox.push({ src: src });
        
        
        
      }
  }
  ngOnInit(): void {
    AOS.init({disable:'mobile'});
  }

  vendorType: any = 'Wedding Venue';
  vendor: Array<any> = ['Wedding Venue', 'Reception', 'Party Hall'];
  vendorDataSource = new MatTableDataSource(this.vendor);

  selectedLocation: any = 'Bangalore India';
  location: Array<any> = ['Bangalore India', 'Delhi', 'Pune'];
  locationDataSource = new MatTableDataSource(this.location);

  selectedNoGuest: any = '10';
  noOfGuest: Array<any> = ['10', '20', '30', '40'];
  noOfGuestDataSource = new MatTableDataSource(this.noOfGuest);

  public popularOwlOptions: OwlOptions = {
    loop: true,
    margin: 24,
    nav: false,
    dots: true,
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
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };
  public venusOwlOptions: OwlOptions = {
    loop: true,
    margin: 24,
    nav: false,
    dots: true,
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
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  public latestBlogOwlOptions: OwlOptions = {
    loop: true,
    margin: 24,
    nav: false,
    dots: true,
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
      800: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
  public bridesdataOwlOptions: OwlOptions = {
    loop: true,
    margin: 24,
    nav: false,
    dots: true,
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
      800: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };

  searchVendor(value: any): void {
    const filterValue = value;
    this.vendorDataSource.filter = filterValue.trim().toLowerCase();
    this.vendor = this.vendorDataSource.filteredData;
  }
  searchLocation(value: any): void {
    const filterValue = value;
    this.locationDataSource.filter = filterValue.trim().toLowerCase();
    this.location = this.locationDataSource.filteredData;
  }
  searchNoOfGuest(value: any): void {
    const filterValue = value;
    this.noOfGuestDataSource.filter = filterValue.trim().toLowerCase();
    this.noOfGuest = this.noOfGuestDataSource.filteredData;
  }
  public lovedataOwlOptions: OwlOptions = {
    loop: true,
    margin: 24,
    nav: false,
    dots: true,
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
        items: 1,
      },
    },
  };
  public amazingworkOwlOptions: OwlOptions = {
    loop: true,
    margin: 24,
    nav: false,
    dots: true,
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
        items: 1,
      },
    },
  };
  openAll(): void {
    this._lightbox.open(this.amazingworklightbox );
  }
  direction(){
    this.router.navigate([routes.listinggridsidebar])
  }
  path(){
    this.router.navigate([routes.home2])
  }
}
