import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ButtonModule } from 'primeng/button';
import { AboutUsComponent } from './about-us/about-us.component';
import { FieldsetModule } from 'primeng/fieldset';
import { DataViewModule } from 'primeng/dataview';
import { CardModule } from 'primeng/card';
import { GalleriaModule } from 'primeng/galleria';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    FieldsetModule,
    DataViewModule,
    CardModule,
    GalleriaModule
  ],
  declarations: [
    HomeComponent,
    AboutUsComponent,
    GalleryComponent
  ]
})
export class PagesModule { }
