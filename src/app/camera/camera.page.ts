import { Component, OnInit } from '@angular/core';
import { CameraService } from '../services/camera.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  imageUrl: string | undefined;

  constructor(private cameraService: CameraService) {}

  ngOnInit() {
  }


  async takePicture() {
    const photo = await this.cameraService.takePicture();
    this.imageUrl = photo.webPath;
  }
}
