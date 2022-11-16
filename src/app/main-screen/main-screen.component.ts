import {
  animate,
  style,
  transition,
  trigger,
  AnimationEvent,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { ImageApiService } from '../image-api.service';
@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss'],
  animations: [
    trigger('animation', [
      transition('void => visible', [
        style({ transform: 'scale(0.5)' }),
        animate('150ms', style({ transform: 'scale(1)' })),
      ]),
      transition('visible => void', [
        style({ transform: 'scale(1)' }),
        animate('150ms', style({ transform: 'scale(0.5)' })),
      ]),
    ]),
    trigger('animation2', [
      transition(':leave', [
        style({ opacity: 1 }),
        animate('50ms', style({ opacity: 0.8 })),
      ]),
    ]),
  ],
})
export class MainScreenComponent implements OnInit {
  [x: string]: any;
  @Input() images: string[] = [];
  @Input() showCount = false;

  previewImage = false;
  showMask = false;
  currentLightboxImage: any = this.images[0];
  currentIndex = 0;
  controls = true;
  totalImageCount = 0;

  constructor(private galleryService: ImageApiService) {}

  ngOnInit(): void {
    this.loadImages();
    this.totalImageCount = this.images.length;
  }

  async loadImages() {
    this.galleryService.getPhotoGallery().subscribe(res => {
      this.images = [...this.images, ...res.pugs];
      console.log(res);
    });
  }
  onPreviewImage(index: number): void {
    this.showMask = true;
    this.previewImage = true;
    this.currentIndex = index;
    this.currentLightboxImage = this.images[index];
  }
  onAnimationEnd(event: AnimationEvent) {
    if (event.toState === 'void') {
      this.showMask = false;
    }
  }

  onClosePreview() {
    this.previewImage = false;
  }
  next(): void {
    this.currentIndex = this.currentIndex + 1;
    if (this.currentIndex > this.images.length - 1) {
      this.currentIndex = 0;
    }
    this.currentLightboxImage = this.images[this.currentIndex];
  }

  prev(): void {
    this.currentIndex = this.currentIndex - 1;
    if (this.currentIndex < 0) {
      this.currentIndex = this.images.length - 1;
    }
    this.currentLightboxImage = this.images[this.currentIndex];
  }
}
