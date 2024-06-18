import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) {}

  segmentChanged(event: CustomEvent) {
    const segmentValue = event.detail.value;
    switch (segmentValue) {
      case 'camera':
        this.router.navigate(['/camera']);
        break;
      case 'geolocation':
        this.router.navigate(['/geolocalization']);
        break;
    }
  }

}
