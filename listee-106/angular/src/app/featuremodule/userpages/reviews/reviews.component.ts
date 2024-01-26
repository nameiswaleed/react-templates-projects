import { Component } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes/routes';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  public routes=routes;
  public reviewdata:any=[]
  constructor(private dataservice:DataService){
    this. reviewdata=this.dataservice.reviewdata
  }

}
