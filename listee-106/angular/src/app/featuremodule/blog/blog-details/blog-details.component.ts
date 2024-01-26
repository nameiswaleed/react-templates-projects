import { Component } from '@angular/core';
import {routes} from 'src/app/core/helpers/routes/routes'
@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent {
 public routes=routes;
}
