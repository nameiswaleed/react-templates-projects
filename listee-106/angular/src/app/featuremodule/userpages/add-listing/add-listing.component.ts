import { Component } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes/routes';
interface Food {
  value: string |any;
  viewValue: string ;
}
interface price {
  value: string |any;
  viewValue: string ;
}

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent {
  public routes=routes;
  selectedValue: string | any;
 

  foods: Food[] = [
    {value: 'steak-0', viewValue: '65'},
    {value: 'pizza-1', viewValue: '75'},
    {value: 'tacos-2', viewValue: '85'},
    {value: 'steak-0', viewValue: '95'},
    {value: 'pizza-1', viewValue: '105'},
    {value: 'tacos-2', viewValue: '110'},
    {value: 'tacos-2', viewValue: '115'},
  ];

  prices:price[]=[
    
      {value: 'steak-0', viewValue: '120'},
      {value: 'pizza-1', viewValue: '130'},
      {value: 'tacos-2', viewValue: '140'},
      {value: 'steak-0', viewValue: '150'},
      {value: 'pizza-1', viewValue: '160'},
      {value: 'tacos-2', viewValue: '170'},
      {value: 'tacos-2', viewValue: '180'},
      {value: 'tacos-2', viewValue: '190'},
    
  ];
  


}
