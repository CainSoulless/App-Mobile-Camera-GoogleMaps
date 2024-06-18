import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { GoogleMapsModule } from '@angular/google-maps';

import { IonicModule } from '@ionic/angular';

import { GeolocalizationPageRoutingModule } from './geolocalization-routing.module';

import { GeolocalizationPage } from './geolocalization.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeolocalizationPageRoutingModule,
    // GoogleMapsModule
  ],
  declarations: [GeolocalizationPage]
})
export class GeolocalizationPageModule {}
