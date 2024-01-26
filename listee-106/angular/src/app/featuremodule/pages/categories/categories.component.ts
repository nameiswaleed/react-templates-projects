import { Component } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes/routes';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  public routes=routes;
  public listingcategory:any=[]
  constructor(private DataService:DataService ){
    
    this.listingcategory=this.DataService.listingcategory
   

  }


}
