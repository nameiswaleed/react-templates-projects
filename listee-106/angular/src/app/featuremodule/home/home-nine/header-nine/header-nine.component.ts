import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { routes } from 'src/app/core/helpers/routes/routes';
import { DataService } from 'src/app/service/data.service';
import { SidebarService } from 'src/app/service/sidebar.service';

@Component({
  selector: 'app-header-nine',
  templateUrl: './header-nine.component.html',
  styleUrls: ['./header-nine.component.scss']
})
export class HeaderNineComponent {
  public routes = routes;
  public base: string = '';
  public page: string = '';
  public last: string = '';

  public tittle: string = 'Home';
  public nav: boolean = false;

  header: Array<any> = [];
  sidebar: Array<any> = [];
  constructor(
    private data: DataService,
    private router: Router,
    private sidebarService: SidebarService
  ) {
    this.header = this.data.header;
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        this.getroutes(event);
      }
    });
    this.getroutes(this.router);
  }
  ngOnInit(): void {}
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
