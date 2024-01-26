import { Component } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes/routes';
import { DataService } from 'src/app/service/data.service';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-listing-list-sidebar',
  templateUrl: './listing-list-sidebar.component.html',
  styleUrls: ['./listing-list-sidebar.component.css']
})
export class ListingListSidebarComponent {
  public routes=routes;
  public listsidebar :any =[];
    slidevalue: number = 55;
  options: Options = {
    floor: 0,
    ceil: 100,
  };
  constructor(private Dataservice:DataService){
    this.listsidebar=this.Dataservice.listsidebarList
  }

}
