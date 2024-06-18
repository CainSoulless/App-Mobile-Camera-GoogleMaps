import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeolocalizationPage } from './geolocalization.page';

describe('GeolocalizationPage', () => {
  let component: GeolocalizationPage;
  let fixture: ComponentFixture<GeolocalizationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GeolocalizationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
