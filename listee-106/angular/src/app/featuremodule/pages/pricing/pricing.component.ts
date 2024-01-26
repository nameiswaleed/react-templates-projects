import { Component } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes/routes';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {
  public routes=routes;
  public pricing :any =[];
  constructor (private dataservice:DataService){
    this.pricing=this.dataservice.pricingList
  }


}
