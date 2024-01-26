import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
// import * as AOS from 'aos';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';
import { SidebarService } from 'src/app/service/sidebar.service';
import { routes } from 'src/app/core/helpers/routes/routes';
@Component({
  selector: 'app-header-four',
  templateUrl: './header-four.component.html',
  styleUrls: ['./header-four.component.css'],
})
export class HeaderFourComponent implements OnInit {
  base: string = '';
  page: string = '';
  last: string = '';
  public nav: boolean = false;
  header: Array<any> = [];
  public routes = routes;
  constructor(
    private data: DataService,
    private router: Router,
    private common: CommonService,
    private sidebarService: SidebarService,
  ) {
    this.header = this.data.header;
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        this.getroutes(event);
      }
    });
    this.getroutes(this.router);
  }
  ngOnInit(): void {
    // AOS.init();
  }
  private getroutes(route: any): void {
    let splitVal = route.url.split('/');
    this.base = splitVal[1];
    this.page = splitVal[2];
    this.last = splitVal[3];

    if (this.base == 'userpages') {
      this.nav = false;
    } else {
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
