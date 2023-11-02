import { Component, HostListener, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {
  isSmall: boolean = false;
  images: any
  responsiveOptions: any

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.photoService.getImages().then((images) => (this.images = images));
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5
      },
      {
        breakpoint: '768px',
        numVisible: 3
      },
      {
        breakpoint: '412px',
        numVisible: 1
      }
    ];
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.verificarTamañoPantalla();
  }

  verificarTamañoPantalla() {
    this.isSmall = window.innerWidth < 768; // Cambia el número según tu criterio de tamaño
  }
}
