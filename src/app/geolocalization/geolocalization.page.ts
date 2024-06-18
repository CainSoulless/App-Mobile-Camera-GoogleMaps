import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { GeolocalizationPageModule } from './geolocalization.module';
import { GoogleMap } from '@capacitor/google-maps';
import { NavController } from '@ionic/angular';

// const apiKey = 'AIzaSyDWzKoPXqk32va4DkffqVDZsfGBO3meXgU'

@Component({
  selector: 'app-geolocalization',
  templateUrl: './geolocalization.page.html',
  styleUrls: ['./geolocalization.page.scss'],
})

export class GeolocalizationPage implements OnInit {
  // center: google.maps.LatLngLiteral = { lat: 0, lng: 0 };
  map: GoogleMap | undefined;

  constructor() { }

  ngOnInit() {
    this.createMap();
  }

  getCurrentLocation = async () => {
    const coordinates = await Geolocation.getCurrentPosition();

    return coordinates;
  }

  async createMap() {
    const mapElement = document.getElementById('map');
    const currentLocation = this.getCurrentLocation();

    if (mapElement) {
      this.map = await GoogleMap.create({
        id: 'my-map',
        element: mapElement,
        apiKey: 'AIzaSyBLU8YASbb--EYbcZE6kqQhKtRPwKG6oQ8',
        config: {
          center: {
            lat: (await currentLocation).coords.latitude,
            lng: (await currentLocation).coords.longitude
          },
          zoom: 16,
        },
      });
    } else {
      console.error('Map element not found');
    }
  }

  // loadMap() {
  //   const element: HTMLElement = document.getElementById('map');
  //   const map: GoogleMap = this.googleMaps.create(element);
  // }
// }
}