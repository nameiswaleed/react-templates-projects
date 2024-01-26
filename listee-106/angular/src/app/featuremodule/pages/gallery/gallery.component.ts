import { Component } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes/routes';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  public routes=routes;
  public albumsOne: any = [];
  constructor(private _lightbox: Lightbox) {
    for (let i = 1; i <= 12; i++) {
      const src = 'assets/img/gallery/gallery2/galleryimage-' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';

      this.albumsOne.push({ src: src });
      
    }
    
  }
  open(index: number, albumArray: Array<any>): void {
    this._lightbox.open(albumArray, index);
  }
  close(): void {
    this._lightbox.close();
  }
  ngOnInit(): void {}
 
 
  }


