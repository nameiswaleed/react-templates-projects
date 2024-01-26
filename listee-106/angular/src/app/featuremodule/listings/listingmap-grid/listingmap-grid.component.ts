import { Component } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes/routes';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-listingmap-grid',
  templateUrl: './listingmap-grid.component.html',
  styleUrls: ['./listingmap-grid.component.css']
})
export class ListingmapGridComponent {
  public routes=routes;
  public mapgrid :any =[];
  constructor(private Dataservice :DataService){
    this.mapgrid=this.Dataservice.mapgridList
  }

}
