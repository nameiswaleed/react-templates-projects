import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes/routes';
import { DataService } from 'src/app/service/data.service';

declare var google: any;
@Component({
  selector: 'app-listingmap-list',
  templateUrl: './listingmap-list.component.html',
  styleUrls: ['./listingmap-list.component.css'],
})
export class ListingmapListComponent implements OnInit {
  public routes = routes;
  public mapList: any = [];

  constructor(private Dataservice: DataService) {
    this.mapList = this.Dataservice.mapList;
  }
  ngOnInit(): void {}
}
