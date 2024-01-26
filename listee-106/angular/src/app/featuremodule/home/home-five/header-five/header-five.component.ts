import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { routes } from 'src/app/core/helpers/routes/routes';
import { CommonService } from 'src/app/service/common.service';
import { DataService } from 'src/app/service/data.service';
import { SidebarService } from 'src/app/service/sidebar.service';

@Component({
  selector: 'app-header-five',
  templateUrl: './header-five.component.html',
  styleUrls: ['./header-five.component.scss']
})
export class HeaderFiveComponent {
  public routes = routes;
  base: string = '';
  page: string = '';
  last: string = '';

  public nav : boolean = false;
  header: Array<any> = [];
  sidebar: Array<any> = [];
  
  
constructor(private data : DataService,private router: Router, private common: CommonService,
  
  private sidebarService: SidebarService){
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
