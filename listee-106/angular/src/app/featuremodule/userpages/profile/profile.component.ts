import { Component } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes/routes';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
public routes=routes;
public Toggledata = false;
public Toggle = false;



iconLogle() {
  this.Toggledata = !this.Toggledata;
 

}
icon(){
  this.Toggle = !this.Toggle;
}
}
