import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ButtonModule } from 'primeng/button';
import { AboutUsComponent } from './about-us/about-us.component';
import { FieldsetModule } from 'primeng/fieldset';
import { ProductsComponent } from './products/products.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    FieldsetModule
  ],
  declarations: [
    HomeComponent,
    AboutUsComponent,
    ProductsComponent,
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
