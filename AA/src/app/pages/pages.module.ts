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
import { LoginComponent } from './login/login.component';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentModule } from '../components/components.module';
@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    FieldsetModule,
    DataViewModule,
    CardModule,
    GalleriaModule,
    PasswordModule,
    InputTextModule,
    ReactiveFormsModule,
    ComponentModule
  ],
  declarations: [
    HomeComponent,
    AboutUsComponent,
    GalleryComponent,
    LoginComponent
  ]
})
export class PagesModule { }
