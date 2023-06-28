import { Component, OnInit } from '@angular/core';
import { Photo } from './photo.model';
import { PhotoService } from './photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';
  photoList: Photo[] | undefined;

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoService.getPhotoList().then((x) => {
      this.photoList = x;
    });
  }
}
