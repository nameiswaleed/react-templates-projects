import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Lightbox } from 'ngx-lightbox';
import { routes } from 'src/app/core/helpers/routes/routes';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent {
  public routes=routes;
  public albumsOne: any = [];
  public albumsTwo:any =[];
 
  constructor(private _lightbox: Lightbox,public router:Router) {
    for (let i = 5; i <= 12; i++) {
      const src = 'assets/img/gallery/gallery1/gallery-' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';

      this.albumsOne.push({ src: src });
      this.albumsTwo.push({src:src});
      
      
    }
    
  }
  open(index: number, albumArray: Array<any>): void {
    this._lightbox.open(albumArray, index);
  }
  openAll( albumArray: Array<any>): void {
    this._lightbox.open(albumArray );
  }
  

  close(): void {
    this._lightbox.close();
  }
  ngOnInit(): void {}
  direction(){
    this.router.navigate([routes.servicedetails])
  }
}
