import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { routes } from 'src/app/core/helpers/routes/routes';
import { CommonService } from 'src/app/service/common.service';
import { DataService } from 'src/app/service/data.service';
import { SidebarService } from 'src/app/service/sidebar.service';

@Component({
  selector: 'app-header-three',
  templateUrl: './header-three.component.html',
  styleUrls: ['./header-three.component.css'],
})
export class HeaderThreeComponent implements OnInit {
  public routes = routes;

  base: string = '';
  page: string = '';
  last: string = '';
  public nav : boolean = false;
  header: Array<any> = [];
  public scrollPosition = 0;
  constructor(private data : DataService,private router: Router,private common: CommonService,private sidebarService: SidebarService){
    this.header = this.data.header;
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.getroutes(event);
      }
    });
    this.getroutes(this.router);
  }
  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      this.scrollPosition = window.scrollY;
    });
  }
  private getroutes(route: any): void {
    let splitVal = route.url.split('/');
    this.base = splitVal[1];
    this.page = splitVal[2];
    this.last = splitVal[3];
    
    
  
    if (
      this.base == 'userpages'   
     )
     {
      this.nav = false;
     } 
    else {
      this.nav = true;
    }
    
  }
  public toggleSidebar(): void {
    this.sidebarService.openSidebar();
  }
  public hideSidebar(): void {
    this.sidebarService.closeSidebar();
  }
}
