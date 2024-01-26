import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/core/helpers/routes/routes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public routes = routes;
  public Toggledata = true;

  constructor(public router:Router){
    
  }
  path(){
    this.router.navigate([routes.dashboard])
  }
  iconLogle() {
    this.Toggledata = !this.Toggledata;
   
  
  }
}
