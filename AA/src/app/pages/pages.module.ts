import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ButtonModule } from 'primeng/button';
import { AboutUsComponent } from './about-us/about-us.component';
import { FieldsetModule } from 'primeng/fieldset';
import { DataViewModule } from 'primeng/dataview';
@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    FieldsetModule,
    DataViewModule
  ],
  declarations: [
    HomeComponent,
    AboutUsComponent,
  ]
})
export class PagesModule { }
