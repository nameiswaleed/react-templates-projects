import { Component, OnInit } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-list-map',
  templateUrl: './list-map.component.html',
  styleUrls: ['./list-map.component.css'],
})
export class ListMapComponent implements OnInit {
  options!: any;
  overlays: Array<any> = [];
  public showFilter: boolean = false;
  infoWindow = new google.maps.InfoWindow();

  ngOnInit(): void {
    this.options = {
      center: { lat: 53.469189, lng: -2.199262 },
      zoom: 14,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    this.overlays = [
      new google.maps.Marker({
        position: { lat: 53.470692, lng: -2.220328 },
        icon: 'assets/img/icons/marker.png',
        doc_name: 'Audi A6 1.8 TFSI 201',
        address: 'Alabama, USA',
        amount: '$350',
        total_review: 'Fixed',
        image: 'assets/img/car-img.jpg',
      }),
      new google.maps.Marker({
        position: { lat: 53.469189, lng: -2.199262 },
        icon: 'assets/img/icons/marker1.png',
        doc_name: 'Amsterdam',
        address: 'Newyork, USA',
        amount: '$50',
        total_review: 'Fixed',
        image: 'assets/img/amsterdam.jpg',
      }),
      new google.maps.Marker({
        position: { lat: 53.468665, lng: -2.189269 },
        icon: 'assets/img/icons/marker2.png',
        doc_name: 'Fresh organic herbs',
        address: 'Georgia, USA',
        amount: '$100',
        total_review: 'Fixed',
        image: 'assets/img/foodhabits.jpg',
      }),
      new google.maps.Marker({
        position: { lat: 53.463894, lng: -2.17788 },
        icon: 'assets/img/icons/marker3.png',
        doc_name: 'Light Wool Navy Blazer',
        address: 'Louisiana, USA',
        amount: '$150',
        total_review: 'Fixed',
        image: 'assets/img/fashion.jpg',
      }),
      new google.maps.Marker({
        position: { lat: 53.460359, lng: -2.210394 },
        icon: 'assets/img/icons/marker4.png',
        doc_name: 'Easy Ways To Learn',
        address: 'Michigan, USA',
        amount: '$50',
        total_review: 'Fixed',
        image: 'assets/img/education.jpg',
      }),
      new google.maps.Marker({
        position: { lat: 53.463906, lng: -2.213271 },
        icon: 'assets/img/icons/marker5.png',
        doc_name: 'Joyful dog',
        address: 'Texas, USA',
        amount: '$100',
        total_review: 'Fixed',
        image: 'assets/img/petanimal.jpg',
      }),
      new google.maps.Marker({
        position: { lat: 53.468974, lng: -2.210661 },
        icon: 'assets/img/icons/marker6.png',
        doc_name: 'Apple iPhone 6 16GB 4G LTE',
        address: 'Kansas, USA',
        amount: '$450',
        total_review: 'Fixed',
        image: 'assets/img/apple-phone.jpg',
      }),
    ];
  }

  setInfo(event: any) {
    var marker = event.overlay;
    var content =
      '<div class="profile-widget" style="width: 276px; background: url(' +
      marker.image +
      '); position: relative; padding: 90px 0; background-repeat: no-repeat; background-size: cover; display: inline-block; border-radius: 10px; ">' +
      '<div class="pro-content">' +
      '<h3 class="title">' +
      '<a href="javascript:void(0)">' +
      marker.doc_name +
      '</a>' +
      '</h3>' +
      '<ul class="available-info">' +
      '<li class="mapaddress"><i class="fas fa-map-marker-alt me-2"></i> ' +
      marker.address +
      ' </li>' +
      '<li class="map-amount">' +
      marker.amount +
      '<span class="d-inline-block average-rating"> (' +
      marker.total_review +
      ')</span>' +
      '</li>' +
      '</ul>' +
      '</div>' +
      '</div>';
    this.infoWindow.setContent(content);
    this.infoWindow.open(event.map, event.overlay);
  }
}
